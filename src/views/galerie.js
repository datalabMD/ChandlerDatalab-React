import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard22 from '../components/gallery-card22'
import Component1 from '../components/component1'
import './galerie.css'

const Galerie = (props) => {
  return (
    <div className="galerie-container">
      <Helmet>
        <title>Galerie | Chandler Moldova</title>
        <meta
          name="description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului care și-au unit eforturile pentru a oferi cele mai calitative produse servicii ..."
        />
        <meta property="og:title" content="Galerie | Chandler Moldova" />
        <meta
          property="og:description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f8825927-f596-443f-8221-3a33b2d13af9/94cb74ff-796a-4fb5-b9b4-7e0120dff081?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="galerie-hero">
        <div className="galerie-container01">
          <h1 className="galerie-text HeadingOne">GALERIA MEDIA</h1>
          <span className="galerie-text01 Lead">
            Accesează una din categoriile de mai jos pentru a vizualiza galeria
            foto cu livezi și materialul săditor
          </span>
        </div>
      </div>
      <div className="galerie-galleryold">
        <div className="galerie-container02">
          <div className="galerie-container03">
            <div className="galerie-container04">
              <div className="galerie-container1">
                <h1 className="galerie-text02 HeadingThree">Echipa CHANDLER</h1>
              </div>
              <Link to="/galerie-echipa" className="galerie-navlink">
                <GalleryCard22
                  title="ECHIPA CHANDLER"
                  image_src="https://ucarecdn.com/dc3f3d78-281e-4ffb-bee6-ff1d7d0a3795/-/preview/-/quality/smart/"
                  description="Ei sunt experții noștri ce te vor ajuta"
                  rootClassName="gallery-card22-root-class-name2"
                  className="galerie-gallery-card22"
                ></GalleryCard22>
              </Link>
            </div>
            <div className="galerie-container05">
              <div className="galerie-container2">
                <h1 className="galerie-text03 HeadingThree">
                  <span>SOIURI DE NUC</span>
                  <span></span>
                </h1>
              </div>
              <Link to="/galerie-soiuri" className="galerie-navlink1">
                <GalleryCard22
                  title="SOIURI DE NUCI"
                  image_alt="soiuri"
                  image_src="https://ucarecdn.com/5210be43-bc0e-4c08-98a3-daffe6fa0314/-/preview/-/quality/smart/"
                  description="vezi galeria foto cu soiurile noastre excepționale"
                  rootClassName="gallery-card22-root-class-name3"
                  className="galerie-gallery-card221"
                ></GalleryCard22>
              </Link>
            </div>
          </div>
          <div className="galerie-container06">
            <div className="galerie-container3">
              <h1 className="galerie-text06 HeadingThree">
                LIVEZI DE CHANDLER
              </h1>
            </div>
            <Link to="/galerie-livezi" className="galerie-navlink2">
              <GalleryCard22
                title="LIVEZI A CLINEȚILOR"
                image_src="https://ucarecdn.com/8577b1c8-1eb7-4c2a-968b-895ce186e78e/-/preview/-/quality/smart/"
                description="vezi galeria foto a livezilor "
                rootClassName="gallery-card22-root-class-name"
                className="galerie-gallery-card222"
              ></GalleryCard22>
            </Link>
          </div>
        </div>
        <div className="galerie-container07">
          <div className="galerie-container4">
            <h1 className="galerie-text07 HeadingThree">
              <span>MATERIAL SĂDITOR</span>
              <span></span>
            </h1>
          </div>
          <Link to="/galerie-material" className="galerie-navlink3">
            <GalleryCard22
              title="MATERIAL SĂDITOR"
              image_src="https://ucarecdn.com/1f14fe06-b767-4789-a40e-10edf7436dd7/-/preview/-/quality/smart/"
              description="Vezi galeria foto a materialului săditor"
              rootClassName="gallery-card22-root-class-name4"
              className="galerie-gallery-card223"
            ></GalleryCard22>
          </Link>
        </div>
      </div>
      <div className="galerie-gallery">
        <div className="galerie-container08">
          <div className="galerie-container09">
            <div className="galerie-container10">
              <Link to="/galerie-echipa" className="galerie-navlink4">
                <GalleryCard22
                  title="ECHIPA CHANDLER"
                  image_src="https://ucarecdn.com/dc3f3d78-281e-4ffb-bee6-ff1d7d0a3795/-/preview/-/quality/smart/"
                  description="Ei sunt experții noștri ce te vor ajuta"
                  rootClassName="gallery-card22-root-class-name11"
                  className="galerie-gallery-card224"
                ></GalleryCard22>
              </Link>
            </div>
            <div className="galerie-container11">
              <Link to="/galerie-soiuri" className="galerie-navlink5">
                <GalleryCard22
                  title="SOIURI DE NUCI"
                  image_alt="soiuri"
                  image_src="https://ucarecdn.com/5210be43-bc0e-4c08-98a3-daffe6fa0314/-/preview/-/quality/smart/"
                  description="vezi galeria foto cu soiurile noastre excepționale"
                  rootClassName="gallery-card22-root-class-name12"
                  className="galerie-gallery-card225"
                ></GalleryCard22>
              </Link>
            </div>
          </div>
          <div className="galerie-container12">
            <Link to="/galerie-livezi" className="galerie-navlink6">
              <GalleryCard22
                title="LIVEZI A CLINEȚILOR"
                image_src="https://ucarecdn.com/8577b1c8-1eb7-4c2a-968b-895ce186e78e/-/preview/-/quality/smart/"
                description="vezi galeria foto a livezilor "
                rootClassName="gallery-card22-root-class-name10"
                className="galerie-gallery-card226"
              ></GalleryCard22>
            </Link>
          </div>
        </div>
        <div className="galerie-container13">
          <Link to="/galerie-material" className="galerie-navlink7">
            <GalleryCard22
              title="MATERIAL SĂDITOR"
              image_src="https://ucarecdn.com/1f14fe06-b767-4789-a40e-10edf7436dd7/-/preview/-/quality/smart/"
              description="Vezi galeria foto a materialului săditor"
              rootClassName="gallery-card22-root-class-name9"
              className="galerie-gallery-card227"
            ></GalleryCard22>
          </Link>
        </div>
      </div>
      <div className="galerie-banner">
        <h2 className="galerie-text10">
          <span>Vă oferim toată expertiza pe care o deținem în domeniu</span>
          <br></br>
          <span>și un întreg spectru de servicii profesionale</span>
        </h2>
        <Link to="/contacte" className="galerie-navlink8 ButtonSmall button">
          CONTACTE
        </Link>
      </div>
      <div className="galerie-containerfooter">
        <Component1 rootClassName="component1-root-class-name8"></Component1>
      </div>
    </div>
  )
}

export default Galerie
