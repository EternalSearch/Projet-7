import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Result from './components/Result'
import Freelances from './components/Freelances'
import Precedent from './pages/précédent' 
import Suivante from './pages/suivante'

<nav>
<Link to="/">PagePrécédente</Link>
<Link to="/">PageSuivante</Link>
</nav>

// On ajoute nos composants


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="/result" element={<Result />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/precedent" element={<Precedent />} />
        <Route path="/suivante" element={<Suivante />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)


