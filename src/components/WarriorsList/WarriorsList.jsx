import { useState, useEffect } from 'react'
import WarriorCard from './WarriorCard/WarriorCard'

export default function WarriorsList () {

    const [fetchCompleted, setFetchCompleted] = useState(false)
    const [fetchedWarriorsList, setFetchedWarriorsList] = useState([])

    const fetchWarriorsList = async () => {
        const results = []
        let url = 'https://swapi.dev/api/people'
   
        do {
          const res = await fetch(url)
          const data = await res.json()
          url = data.next
          results.push(...data.results)
        } while(url)
   
        setFetchedWarriorsList(results)
        setFetchCompleted(true)
    }

    useEffect(() => fetchWarriorsList(), [])

    return (
        <section className='warriorsList'>
            {fetchCompleted ? fetchedWarriorsList.map((warrior, i) => <WarriorCard key={warrior.name} warrior={warrior} id={i}/>) : <p>Loading...</p>}
        </section>
    )
}