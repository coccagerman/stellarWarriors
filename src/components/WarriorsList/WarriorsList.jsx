import { useState } from 'react'
import WarriorCard from './WarriorCard/WarriorCard'
import SearchBar from './SearchBar/SearchBar'

export default function WarriorsList ({fetchedWarriorsList}) {

    const [searchParams, setSearchParams] = useState('')

    const filteredWarriors = fetchedWarriorsList.filter(warrior => (warrior.name.toLowerCase().includes(searchParams)))

    return (
        <> 
            <SearchBar setSearchParams={setSearchParams} />
            <section className='warriorsList'>
                {searchParams ? filteredWarriors.map((warrior, i) => <WarriorCard key={warrior.name} warrior={warrior} id={i < 16 ? i+1 : i+2}/>) :
                    fetchedWarriorsList.map((warrior, i) => <WarriorCard key={warrior.name} warrior={warrior} id={i < 16 ? i+1 : i+2}/>)}
            </section>
        </>
    )
}