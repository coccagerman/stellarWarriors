import Context from '../../Context'
import { useState, useEffect, useContext } from 'react'

export default function WarriorProfile () {

    const context = useContext(Context)

    const [fetchCompleted, setFetchCompleted] = useState(false)
    const [fetchedWarrior, setFetchedWarrior] = useState({})

    const fetchWarrior = async () =>{
        let url = `https://swapi.dev/api/people/?search=${context.profileToShow}`
   
        const res = await fetch(url)
        const data = await res.json()

        setFetchedWarrior(data.results[0])
        setFetchCompleted(true)
    }

    useEffect(() => {fetchWarrior()}, [])

    return (
        <section className='warriorProfile'>

            <h1>{fetchedWarrior.name}</h1>

            {fetchCompleted ? <div className='profile-container'>
                <img src={`/warriors/${fetchedWarrior.name}.jpeg`} alt='Warrior' />
                <div className='data-container'>
                    <p><span className='data-title'>Birth year:</span> {fetchedWarrior.birth_year}</p>
                    <p><span className='data-title'>Eye color:</span> {fetchedWarrior.eye_color}</p>
                    <p><span className='data-title'>Gender:</span> {fetchedWarrior.gender}</p>
                    <p><span className='data-title'>Hair color:</span> {fetchedWarrior.hair_color}</p>
                    <p><span className='data-title'>Skin color:</span> {fetchedWarrior.skin_color}</p>
                    <p><span className='data-title'>Height:</span> {fetchedWarrior.height}</p>
                    <p><span className='data-title'>Mass:</span> {fetchedWarrior.mass}</p>
                </div>    
            </div> :
             <p>Loading...</p>
            }

        </section>
    )
}