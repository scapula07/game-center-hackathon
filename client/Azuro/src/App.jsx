import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import LiveStreaming from './pages/Livestream'
import Tournament from './pages/Tournament'
import Gameroom from './pages/Gameroom'

function App() {


  return (
    <div className="App ">
         <Routes>
            <Route exact path="/"  element={ <Layout ><Home   /></Layout>} />
            <Route exact path="/tournament"  element={ <Layout >< Tournament  /></Layout>} />
            <Route exact path="/livestreaming"  element={ <Layout >< LiveStreaming  /></Layout>} />
            <Route exact path="/gameroom"  element={ <Layout >< Gameroom  /></Layout>} />
          
       </Routes>
     
    </div>
  )
}

export default App
