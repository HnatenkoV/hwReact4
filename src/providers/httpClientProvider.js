import React, {useEffect, useState} from "react";

export const HttpClientContext = React.createContext({
    heroList: [],
    fetchHeros: () => {},
})

const HttpClientProvider = (props) => {
    const [heroList, setHeroList] = useState([]);
    useEffect(() => fetchHeros(`https://rickandmortyapi.com/api/character/?page=1`), [])

    const fetchHeros = (page) => {
        fetch(page)
            .then((r) => r.json())
            .then((data) => setHeroList(data))
            .catch((err) => console.log('error'))

    }
    const getHeroCtx = () => ({
        heroList,
        fetchHeros
    })

    return (
        <HttpClientContext.Provider value={getHeroCtx()}>
            {props.children}
        </HttpClientContext.Provider>
    )
}

export default HttpClientProvider