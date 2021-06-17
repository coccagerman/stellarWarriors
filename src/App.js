import './App.scss'
import Context from './Context';
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import WarriorsList from './components/WarriorsList/WarriorsList'
import WarriorBuilder from './components/WarriorBuilder/WarriorBuilder'
import StellarFighting from './components/StellarFighting/StellarFighting'
import WarriorProfile from './components/WarriorProfile/WarriorProfile'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  const [profileToShow, setProfileToShow] = useState('')

  return (
    <Router>

      <Context.Provider value={{ profileToShow: profileToShow, setProfileToShow: setProfileToShow }}>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>

          <Route path="/" exact>
            <Hero darkMode={darkMode} />
          </Route>

          <Route path="/warriors">
            <WarriorsList />
          </Route>

          <Route path="/warrior/:id">
            <WarriorProfile />
          </Route>

          <Route path="/warriorBuilder">
            <WarriorBuilder />
          </Route>

          <Route path="/stellarFighting">
            <StellarFighting />
          </Route>
          
        </Switch>

      </Context.Provider>

    </Router>
  )
}