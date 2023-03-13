import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Chandler Moldova</title>
        <meta
          name="description"
          content="Chandler Moldova este un grup de producători, prestatori de servicii și experți"
        />
        <meta property="og:title" content="Chandler Moldova" />
        <meta
          property="og:description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f8825927-f596-443f-8221-3a33b2d13af9/94cb74ff-796a-4fb5-b9b4-7e0120dff081?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="about-container01"></div>
      <div className="about-hero">
        <div className="about-container02">
          <h1 className="about-text HeadingOne">
            <span>DESPRE NOI</span>
            <br></br>
            <span></span>
          </h1>
          <span className="about-text03">
            <span>
              Chandler Moldova este un grup de producători, prestatori de
              servicii și experți ai culturii nucului care și-au unit eforturile
              pentru a oferi cele mai calitative produse, servicii și expertiză
              nucicultorilor din Republica Moldova care sunt interesați de
              înființarea livezilor de nuc cu soiuri de nuc moderne, în special
              Chandler.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Echipa noastră reunește cei mai buni specialiști ai culturii
              nucului din Moldova, cu experiență unică pe cultura intensivă
              începând din 2006 când au fost înființate primele livezi moderne
              de nuc (Lara, Fernor) în Moldova. Am început a lucra cu soiul
              Chandler din anul 2013, Tulare și Serr din 2014.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Mai multe vizite efectuate în Italia și Franța ne-au permis să
              înțelegem mai bine specificul acestor soiuri și să preluăm
              experiența producătorilor europeni. Transpunerea acestei
              experiențe în practica nuciculturii autohtone s-a făcut treptat,
              ajustând tehnologiile și recomandările la specificul climatic,
              pedologic și social-economic local, astfel încât astăzi experitza
              colectivă a membrilor echipei Chandler Moldova este neegalată.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="https://ucarecdn.com/81d98c1a-af5f-49f9-9a01-e7bdc378a265/-/preview/-/quality/smart/"
          className="about-image"
        />
      </div>
      <div className="about-containerbody">
        <div className="about-testimonial">
          <div className="about-container03">
            <h1 className="about-text08 HeadingOne">
              <span>EI SUNT EXPERȚII NOȘTRI</span>
              <br></br>
              <span></span>
            </h1>
            <span className="about-text11 Lead">
              <span>CARE TE VOR AJUTA SĂ REALIZEZI PROIECTUL TĂU NUCICOL</span>
              <span></span>
            </span>
            <div className="about-blog">
              <div className="about-container04">
                <div className="about-people">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/804ea248-0dae-4ef4-9f5b-dda697b6ea27/-/preview/-/quality/smart/"
                    className="about-image1"
                  />
                  <div className="about-container05">
                    <span className="about-text14 HeadingThree">
                      <span>Mihai NEGRESCU</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text17 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="about-text20 Label">
                      <span>
                        Responsabil pe relația cu clienții și partenerii C-M
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="about-container06"></div>
                    <span className="about-text23 Medium">
                      <span>
                        Planificarea și înființarea livezii de nuc; consultanță
                        întreținere plantație; recoltarea, procesarea și
                        exportul nucilor
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-container07">
                <div className="about-people1">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/c8e95c02-ac63-4ee7-9181-b950765ee31a/-/preview/-/quality/smart/"
                    className="about-image2"
                  />
                  <div className="about-container08">
                    <span className="about-text26 HeadingThree">
                      <span>Ștefan MARANDICI</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text29 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="about-text32 Label">
                      <span>
                        Responsabil management fitosanitar și fertilizare
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="about-container09"></div>
                    <span className="about-text35 Medium">
                      <span>
                        Protecția integrată în livezile de nuc; gestiunea
                        plantațiilor bio; diagnosticarea patologiilor și
                        asistență restabilire
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-container10">
                <div className="about-people2">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/a7493552-ff58-4526-9339-aeaae754a984/-/preview/-/quality/smart/"
                    className="about-image3"
                  />
                  <div className="about-container11">
                    <span className="about-text38 HeadingThree">
                      <span>
                        Doru
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>TALMACI</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text42 ButtonSmall">
                      <span>
                        Inginer-proiectant livezi
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text45 Label">
                      <span>Director Chandler Moldova</span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="about-container12"></div>
                    <span className="about-text48 Medium">
                      <span>
                        Optimizarea amplasării plantațiilor de nuc, elaborarea
                        proiectelor de livadă, transpunerea proiectelor în
                        natură
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-container13">
                <div className="about-people3">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/e6322fab-52e3-4c3c-832c-a4b8f6861f2a/-/preview/-/quality/smart/"
                    className="about-image4"
                  />
                  <div className="about-container14">
                    <span className="about-text51 HeadingThree">
                      <span>
                        Oleg
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>TÎRSÎNĂ</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text55 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="about-text58 Label">
                      <span>
                        Director pepinieră de nuc altoit Chandler Moldova
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="about-container15"></div>
                    <span className="about-text61 Medium">
                      <span>
                        Dezvoltarea unei afaceri în sectorul nucifer, expertiză
                        pe dimensiunea soiurilor de nuc și a tehnologiilor
                        moderne aplicate în livezi
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-container16">
                <div className="about-people4">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/29d83a44-99ed-48f3-b6d6-fc02437bcd30/-/preview/-/quality/smart/"
                    className="about-image5"
                  />
                  <div className="about-container17">
                    <span className="about-text64 HeadingThree">
                      <span>Viorel SOLTAN</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="about-text67 ButtonSmall">
                      <span>Expert JURIDIC</span>
                    </span>
                    <span className="about-text69 Label">
                      <span>Manager departament juridic</span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="about-container18"></div>
                    <span className="about-text72 Medium">
                      <span>
                        Asistență juridică la înregistrarea sau reorganizarea
                        întreprinderii, elaborarea dosarelor pentru obținerea
                        subvențiilor AIPA
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-containerfooter">
        <Component1 rootClassName="component1-root-class-name2"></Component1>
      </div>
    </div>
  )
}

export default About
