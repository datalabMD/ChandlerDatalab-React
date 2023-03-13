import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import './galerie-echipa.css'

const GalerieEchipa = (props) => {
  return (
    <div className="galerie-echipa-container">
      <Helmet>
        <title>Galerie Echipa | Chandler Moldova</title>
        <meta
          name="description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului care și-au unit eforturile pentru a oferi cele mai calitative produse servicii ..."
        />
        <meta property="og:title" content="Galerie Echipa | Chandler Moldova" />
        <meta
          property="og:description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f8825927-f596-443f-8221-3a33b2d13af9/94cb74ff-796a-4fb5-b9b4-7e0120dff081?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="galerie-echipa-container01"></div>
      <section className="galerie-echipa-asistenta">
        <div className="galerie-echipa-containertitle">
          <h2 className="galerie-echipa-text">ASISTENȚA NOASTRĂ</h2>
          <span className="galerie-echipa-text01">
            <span>Vă oferim toată expertiza pe care o deținem în domeniu</span>
            <br></br>
            <span>și un întreg spectru de servicii profesionale</span>
          </span>
        </div>
        <div className="galerie-echipa-gallery">
          <div className="galerie-echipa-container02">
            <div className="galerie-echipa-container03">
              <h1 className="galerie-echipa-text04">Echipa Chandler</h1>
              <span className="galerie-echipa-text05">
                <span>Selectarea terenului</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="galerie-echipa-container04">
            <div className="galerie-echipa-container05">
              <h1 className="galerie-echipa-text08">Echipa Chandler</h1>
              <span className="galerie-echipa-text09">
                <span>vizite in livezi</span>
              </span>
            </div>
          </div>
          <div className="galerie-echipa-container06">
            <div className="galerie-echipa-container07">
              <h1 className="galerie-echipa-text11">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container08">
            <div className="galerie-echipa-container09">
              <h1 className="galerie-echipa-text12">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container10">
            <div className="galerie-echipa-container11">
              <h1 className="galerie-echipa-text13">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container12">
            <div className="galerie-echipa-container13">
              <h1 className="galerie-echipa-text14">Echipa Chandler</h1>
            </div>
          </div>
        </div>
        <div className="galerie-echipa-gallery1">
          <div className="galerie-echipa-container14">
            <div className="galerie-echipa-container15">
              <h1 className="galerie-echipa-text15">Echipa Chandler</h1>
              <span className="galerie-echipa-text16">
                <span>Selectarea terenului</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="galerie-echipa-container16">
            <div className="galerie-echipa-container17">
              <h1 className="galerie-echipa-text19">Echipa Chandler</h1>
              <span className="galerie-echipa-text20">
                <span>vizite in livezi</span>
              </span>
            </div>
          </div>
          <div className="galerie-echipa-container18">
            <div className="galerie-echipa-container19">
              <h1 className="galerie-echipa-text22">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container20">
            <div className="galerie-echipa-container21">
              <h1 className="galerie-echipa-text23">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container22">
            <div className="galerie-echipa-container23">
              <h1 className="galerie-echipa-text24">Echipa Chandler</h1>
            </div>
          </div>
          <div className="galerie-echipa-container24">
            <div className="galerie-echipa-container25">
              <h1 className="galerie-echipa-text25">Echipa Chandler</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="galerie-echipa-dividergradient"></div>
      <div className="galerie-echipa-banner">
        <h2 className="galerie-echipa-text26">
          <span>Vă oferim toată expertiza pe care o deținem în domeniu</span>
          <br></br>
          <span>și un întreg spectru de servicii profesionale</span>
        </h2>
        <button className="galerie-echipa-button button ButtonSmall">
          CONTACTE
        </button>
      </div>
      <Component1></Component1>
    </div>
  )
}

export default GalerieEchipa
