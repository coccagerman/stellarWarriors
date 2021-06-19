import './App.scss'
import Context from './Context'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import WarriorsList from './components/WarriorsList/WarriorsList'
import StellarFighting from './components/StellarFighting/StellarFighting'
import WarriorProfile from './components/WarriorProfile/WarriorProfile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function App() {

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
  }

  useEffect(() => fetchWarriorsList(), [])

  return (
    <Router>

      <Context.Provider >

        <Navbar />
        <Switch>

          <Route path="/" exact>
            <Hero />
          </Route>

          <Route path="/warriors">
            <WarriorsList fetchedWarriorsList={fetchedWarriorsList} />
          </Route>

          <Route path="/warrior/:id">
            <WarriorProfile />
          </Route>

          <Route path="/stellarFighting">
            <StellarFighting fetchedWarriorsList={fetchedWarriorsList} />
          </Route>
          
        </Switch>

      </Context.Provider>

    </Router>
  )
}