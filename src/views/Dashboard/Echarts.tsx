import React, { useEffect, useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import request, { gql } from 'graphql-request'
import { getUnixTime, startOfDay, subDays, format } from 'date-fns'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { useTvl } from './tvl'

const Echart = styled.div`
  width: 100%;
  height: 100%;
  .echarts-for-react {
    width: 100%;
  }
`

const Echarts = () => {
  const [data, setData] = useState([])

  const { isDark } = useTheme()
  const tvl = useTvl()

  const dims = useMemo(
    () => ({
      time: 0,
      windSpeed: 1,
      R: 2,
      waveHeight: 3,
      weatherIcon: 2,
      minTemp: 3,
      maxTemp: 4,
    }),
    []
  )

  useEffect(() => {
    const timestamp = getUnixTime(subDays(startOfDay(new Date()), 7)).toString()

    async function fetchGraph() {
      const response = await request(
        'https://n5.hg.network/subgraphs/name/hubfarms/heco',
        gql`
          query getPoolHistories($timestamp: String!) {
            poolHistories(orderBy: "timestamp", orderDirection: asc, where: { timestamp_gte: $timestamp }) {
              pool {
                id
                pair
              }
              timestamp
              entryUSD
              exitUSD
            }
          }
        `,
        { timestamp }
      )

      const histories: [string, BigNumber][] = Object.entries(
        response.poolHistories.reduce((kv, pool) => {
          const { entryUSD, exitUSD } = pool
          const day = format(pool.timestamp * 1000, 'yyyy-MM-dd')
          const usd = new BigNumber(entryUSD).minus(exitUSD).plus(kv[day] || new BigNumber(0))

          kv[day] = usd
          return kv
        }, {})
      )

      const result = histories.map(([key, val]) => [key, val.div(1e12).toFixed(2)])
      setData([...result])
    }

    fetchGraph()
  }, [setData])
  // 配置对象
  const option = useMemo(() => {
    return {
      title: [
        {
          text: `TLV $${tvl}`,
          left: '1%',
          top: '10px',
          textStyle: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: isDark ? '#fff' : '#2f303f',
          },
        },
      ],
      grid: {
        top: 50,
        bottom: 40,
        left: 40,
        right: 80,
      },
      xAxis: {
        type: 'time',
        // maxInterval: 3600 * 1000 * 13,
        splitLine: {
          lineStyle: {
            color: '#ddd',
          },
        },
        axisLabel: {
          formatter: () => {
            return `{MM}-{dd}`
          },
        },
      },
      yAxis: [
        {
          name: '',
          nameLocation: 'middle',
          nameGap: 35,
          axisLine: {
            lineStyle: {
              color: '#666',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#ddd',
            },
          },
        },
        {
          name: '',
          nameLocation: 'middle',
          nameGap: 35,
          axisLine: {
            lineStyle: {
              color: '#015DD5',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
            },
          },
          axisLabel: {
            formatter: (value) => {
              return `$${value}`
            },
          },
        },
      ],

      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: 0,
          minSpan: 5,
        },
      ],
      series: [
        {
          type: 'line',
          yAxisIndex: 1,
          showSymbol: false,
          hoverAnimation: false,
          symbolSize: 10,
          itemStyle: {
            color: '#FF9F1A',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#FF9F1A',
                },
                {
                  offset: 1,
                  color: '#FFFAE8',
                },
              ],
            },
          },
          encode: {
            x: dims.time,
            y: dims.waveHeight,
          },
          data,
          z: 2,
        },
      ],
    }
  }, [dims, tvl, isDark, data])

  return (
    <Echart>
      <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
    </Echart>
  )
}

export default Echarts
