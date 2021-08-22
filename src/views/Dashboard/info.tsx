/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react'

export const HDInfo = () => {
  const [data, setData] = useState({
    circulating:0,
    remaining:0,
    burned:0,
  })

  useEffect(() => {
    async function fetchData() {
      fetch('/api/hd/info')
        .then((response) => response.json())
        .then((data) => setData(data))
    }

    fetchData()
  }, [setData])

  return data
}
