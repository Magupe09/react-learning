import './App.css'
import React, { useEffect, useState } from 'react';
import { getRandomFact } from './services/facts';
import { useCatImage } from './hooks/useCatlmage';


export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })

    useEffect(() => {
        getRandomFact(setFact)
    }, [])

    const handleClick = () => {
        getRandomFact(setFact)
    }
    return (
        <main>

            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}

        </main>
    )
} 