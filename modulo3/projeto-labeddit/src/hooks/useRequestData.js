import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(url , {
      headers: {
        "Content-type": "application/json",
        Authorization: token
      }
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }, [url])

  return (data)
}

export default useRequestData
