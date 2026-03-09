import { useState, useEffect } from "react";

const useGetCharacter = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(response => {
            if (!response.ok) throw new Error ('Error al cargar')
            return response.json()
        })
        .then(json => setData(json))
    },[url]);

    return { data }
}

export default useGetCharacter