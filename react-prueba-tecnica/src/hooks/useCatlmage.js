import { useEffect, useState } from 'react'


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
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
    return { imageUrl }

} // {imagUrl:'htpps:// ...'}
