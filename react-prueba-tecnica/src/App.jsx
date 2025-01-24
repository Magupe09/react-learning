
import React, { useEffect, useState } from 'react';

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_ENDPOINT_RANDOM_URL = 'https://catfact.ninja/fact'


export function App() {
    const [fact, setFact] = useState('Lorem ipsum cat fact whatever')

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_URL)
            .then(res => res.json())
            .then(data => setFact(data.fact))

    }, [])
    return (
        <main>

            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}