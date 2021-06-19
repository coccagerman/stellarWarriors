import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default function WarriorsSelection ({fetchedWarriorsList, setWarrior1, setWarrior2, warrior1, warrior2}) {

    const history = useHistory()

    return (
        <>  
            <h1>Pick your warriors and make them fight!</h1>

            <div className='selectors-container'>
                <article className="formInput">
                    <label for="warrior1">Select warrior 1</label>
                    <select id="warrior1" onChange={e => setWarrior1(fetchedWarriorsList.filter(warrior => warrior.name === e.target.value)[0])}>
                        <option value="">Select a warrior</option>
                        {fetchedWarriorsList.map(warrior =>  <option key={warrior.name} value={warrior.name}>{warrior.name}</option>)}
                    </select>
                    
                    {warrior1 ? <div className='img-container'><img src={`/warriors/${warrior1.name}.jpeg`} alt='Warrior1' /></div> : null}
                </article>

                <article className="formInput">
                    <label for="warrior2">Select warrior 2</label>
                    <select id="warrior2" onChange={e => setWarrior2(fetchedWarriorsList.filter(warrior => warrior.name === e.target.value)[0])}>
                        <option value="">Select a warrior</option>
                        {fetchedWarriorsList.map(warrior =>  <option key={warrior.name} value={warrior.name}>{warrior.name}</option>)}
                    </select>

                    {warrior2 ? <div className='img-container'><img src={`/warriors/${warrior2.name}.jpeg`} alt='Warrior2' /></div> : null}
                </article>
            </div>

            {warrior1 && warrior2 ? <button className='btn-primary' onClick={() => history.push('/stellarFighting/winner')}>Fight!</button> : null}
        </>
    )
}