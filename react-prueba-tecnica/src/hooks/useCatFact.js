import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
export function useCatFact() {
    const [fact, setFact] = useState()
    const refreshRandomFact = () => {
        getRandomFact(setFact)

    }
    //Para recuperar la cita
    useEffect(refreshRandomFact, [])
    return { fact, refreshRandomFact }
}