const CAT_ENDPOINT_RANDOM_URL = 'https://catfact.ninja/fact'

export const getRandomFact = (callback) => {
    fetch(CAT_ENDPOINT_RANDOM_URL)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            callback(fact)
        })
} 