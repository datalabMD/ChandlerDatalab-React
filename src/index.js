import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Suport from './views/suport'
import GalerieSoiuri from './views/galerie-soiuri'
import Page from './views/page'
import GalerieLivezi from './views/galerie-livezi'
import GalerieMaterial from './views/galerie-material'
import Galerie from './views/galerie'
import GalerieEchipa from './views/galerie-echipa'
import Contacte from './views/contacte'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Suport} exact path="/suport" />
        <Route component={GalerieSoiuri} exact path="/galerie-soiuri" />
        <Route component={Page} exact path="/404" />
        <Route component={GalerieLivezi} exact path="/galerie-livezi" />
        <Route component={GalerieMaterial} exact path="/galerie-material" />
        <Route component={Galerie} exact path="/galerie" />
        <Route component={GalerieEchipa} exact path="/galerie-echipa" />
        <Route component={Contacte} exact path="/contacte" />
        <Route component={About} exact path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
