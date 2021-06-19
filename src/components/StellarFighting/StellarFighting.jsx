import { useState } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import WarriorsSelection from './WarriorsSelection/WarriorsSelection'
import Loader from './Loader/Loader'
import Winner from './Winner/Winner'

export default function StellarFighting ({fetchedWarriorsList}) {

    const [warrior1, setWarrior1] = useState (null)
    const [warrior2, setWarrior2] = useState (null)

    return (
        <section className='stellarFighting'>

            <Switch>
                <Route path='/stellarFighting/selectFighters' exact>
                    <WarriorsSelection  fetchedWarriorsList={fetchedWarriorsList} warrior1={warrior1} setWarrior1={setWarrior1} warrior2={warrior2} setWarrior2={setWarrior2} />
                </Route>

                <Route path='/stellarFighting/fighting' exact>
                    <Loader />
                </Route>

                <Route path='/stellarFighting/winner' exact>
                    <Winner warrior1={warrior1} warrior2={warrior2} />
                </Route>
            </Switch>

        </section>
    )
}