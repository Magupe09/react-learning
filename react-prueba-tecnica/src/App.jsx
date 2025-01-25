import './App.css'
import React, { useEffect, useState } from 'react';


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_ENDPOINT_RANDOM_URL = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App() {
    const [fact, setFact] = useState('Lorem ipsum cat fact whatever')
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)


            })



    }, [])

    useEffect(() => {
        if (!fact) return


        const firstWord = fact.split(' ')[0]
        console.log(firstWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${firstWord}`
                setImageUrl(`${CAT_PREFIX_IMAGE_URL}${url}`)


                //console.log(imageUrl)
            })
    }, [fact])
    return (
        <main>

            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}

        </main>
    )
} 