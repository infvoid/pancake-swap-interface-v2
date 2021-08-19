import { useEffect, useState } from 'react'
import request, { gql } from 'graphql-request'
import { getUnixTime, subDays } from 'date-fns'

const GLOBAL_DATA = (block = false) => {
  return request(
    'https://q.hg.network/subgraphs/name/hubswap/heco',
    gql`
      query uniswapFactories {
        uniswapFactories(
         ${block ? `block: { number: ${block}}` : ``}
         where: { id: "0xEeDCce959675Ae3d8974741e80Aaa8244a6e3507" }) {
          totalVolumeUSD
        }
      }
    `
  )
}

export const OneDayData = () => {
  const [ volume, setVolume ] = useState('0.00')
  const [ fee, setFee ] = useState('0.00')

  useEffect(() => {
    async function fetchData() {
      const utcOneDayBack = getUnixTime(subDays(new Date(), 1))
      const oneDayBlock = await request(
        'https://q.hg.network/subgraphs/name/hecoblocks/heco',
        gql`
          query blocks($timestampFrom: Int!, $timestampTo: Int!) {
            blocks(
              first: 1
              orderBy: timestamp
              orderDirection: asc
              where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }
            ) {
              id
              number
              timestamp
            }
          }
        `,
        { timestampFrom: utcOneDayBack, timestampTo: utcOneDayBack + 600 }
      ).then(({ blocks }) => blocks[0])

      const data = await GLOBAL_DATA().then(result => result.uniswapFactories[0])
      const oneDayData = await GLOBAL_DATA(oneDayBlock?.number).then(result => result.uniswapFactories[0])

      const v = parseFloat(data.totalVolumeUSD) - parseFloat(oneDayData.totalVolumeUSD)
      const f = v * 0.0025

      setVolume(v.toLocaleString(undefined, { maximumFractionDigits: 2 }))
      setFee(f.toLocaleString(undefined, { maximumFractionDigits: 2 }))
    }

    fetchData()
  }, [ setVolume, setFee ])

  return [ volume, fee ]
}

