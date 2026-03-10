import { useEffect, useState } from "react"

const useFetchCharacters = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

    useEffect(() => {

    setData(null)
    setError(null)
    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err){
        console.log(err)
        setError(err.message || 'Ha ocurrido un error')
      } finally {
        setLoading(false)
      }
    }

    if(url) {
      fetchData()
    }

  }, [url])
  return { data, error, loading } 
}

export default useFetchCharacters