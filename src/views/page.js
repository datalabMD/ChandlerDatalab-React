import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
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
      <Header rootClassName="header-root-class-name10"></Header>
      <div className="page-containerbody">
        <div className="page-testimonial">
          <div className="page-container01">
            <h1 className="page-text HeadingOne">
              <span>EI SUNT EXPERȚII NOȘTRI</span>
              <br></br>
              <span></span>
            </h1>
            <span className="page-text03 Lead">
              <span>CARE TE VOR AJUTA SĂ REALIZEZI PROIECTUL TĂU NUCICOL</span>
              <span></span>
            </span>
            <div className="page-blog">
              <div className="page-container02">
                <div className="page-people">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/804ea248-0dae-4ef4-9f5b-dda697b6ea27/-/preview/-/quality/smart/"
                    className="page-image"
                  />
                  <div className="page-container03">
                    <span className="page-text06 HeadingThree">
                      <span>Mihai NEGRESCU</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="page-text09 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="page-text12 Label">
                      <span>
                        Responsabil pe relația cu clienții și partenerii C-M
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="page-container04"></div>
                    <span className="page-text15 Medium">
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
              <div className="page-container05">
                <div className="page-people1">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/c8e95c02-ac63-4ee7-9181-b950765ee31a/-/preview/-/quality/smart/"
                    className="page-image1"
                  />
                  <div className="page-container06">
                    <span className="page-text18 HeadingThree">
                      <span>Ștefan MARANDICI</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="page-text21 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="page-text24 Label">
                      <span>
                        Responsabil management fitosanitar și fertilizare
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="page-container07"></div>
                    <span className="page-text27 Medium">
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
              <div className="page-container08">
                <div className="page-people2">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/a7493552-ff58-4526-9339-aeaae754a984/-/preview/-/quality/smart/"
                    className="page-image2"
                  />
                  <div className="page-container09">
                    <span className="page-text30 HeadingThree">
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
                    <span className="page-text34 ButtonSmall">
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
                    <span className="page-text37 Label">
                      <span>Director Chandler Moldova</span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="page-container10"></div>
                    <span className="page-text40 Medium">
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
              <div className="page-container11">
                <div className="page-people3">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/e6322fab-52e3-4c3c-832c-a4b8f6861f2a/-/preview/-/quality/smart/"
                    className="page-image3"
                  />
                  <div className="page-container12">
                    <span className="page-text43 HeadingThree">
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
                    <span className="page-text47 ButtonSmall">
                      <span>Expert pe cultura nucului</span>
                      <span></span>
                    </span>
                    <span className="page-text50 Label">
                      <span>
                        Director pepinieră de nuc altoit Chandler Moldova
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="page-container13"></div>
                    <span className="page-text53 Medium">
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
              <div className="page-container14">
                <div className="page-people4">
                  <img
                    alt="image"
                    src="https://ucarecdn.com/29d83a44-99ed-48f3-b6d6-fc02437bcd30/-/preview/-/quality/smart/"
                    className="page-image4"
                  />
                  <div className="page-container15">
                    <span className="page-text56 HeadingThree">
                      <span>Viorel SOLTAN</span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="page-text59 ButtonSmall">
                      <span>Expert JURIDIC</span>
                    </span>
                    <span className="page-text61 Label">
                      <span>Manager departament juridic</span>
                      <br></br>
                      <span></span>
                    </span>
                    <div className="page-container16"></div>
                    <span className="page-text64 Medium">
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
      <div className="page-contact">
        <div className="page-container17">
          <h1 className="page-text67">404</h1>
          <div className="page-btn-group">
            <Link to="/" className="page-navlink button">
              HOME
            </Link>
          </div>
        </div>
      </div>
      <div className="page-container18">
        <Component1 rootClassName="component1-root-class-name9"></Component1>
      </div>
    </div>
  )
}

export default Page
