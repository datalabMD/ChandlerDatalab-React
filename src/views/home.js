import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineGrayButtonHeero from '../components/outline-gray-button-heero'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItemright from '../components/list-itemright'
import Component1 from '../components/component1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Acasa | Chandler Moldova</title>
        <meta
          name="description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului care și-au unit eforturile pentru a oferi cele mai calitative produse servicii ..."
        />
        <meta property="og:title" content="Acasa | Chandler Moldova" />
        <meta
          property="og:description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f8825927-f596-443f-8221-3a33b2d13af9/94cb74ff-796a-4fb5-b9b4-7e0120dff081?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-herrosl">
            <div className="home-card">
              <div className="home-container03">
                <h1 className="home-text">Înființează o livadă de nuc ​</h1>
                <h1 className="home-text01">CHANDLER</h1>
                <h1 className="home-text02">și alte soiuri americane</h1>
              </div>
              <span className="home-text03 Content">
                <span>
                  Cu ajutorul celor mai buni specialiști pe cultura nucului din
                  țară.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span></span>
              </span>
              <Link to="/about" className="home-navlink">
                <OutlineGrayButtonHeero
                  button="DESCOPERĂ ECHIPA CHANDLER MOLDOVA ȘI CUM POȚI COLABORA CU NOI"
                  rootClassName="outline-gray-button-heero-root-class-name2"
                  className="home-component01"
                ></OutlineGrayButtonHeero>
              </Link>
            </div>
            <div className="home-banner">
              <h1 className="home-text06">
                <span className="home-text07">
                  Înființează o livadă de nuc CHANDLER
                </span>
                <br></br>
                <span className="home-text09">și alte soiuri americane</span>
              </h1>
              <span className="home-text10 Content">
                <span>
                  <span>
                    Cu ajutorul celor mai buni specialiști pe cultura nucului
                    din țară. ​
                  </span>
                </span>
              </span>
              <div className="home-container04">
                <div className="home-container05">
                  <div className="home-container06">
                    <div className="home-container07">
                      <div className="home-container08">
                        <div className="home-btn-group">
                          <button className="home-button button">
                            Learn More
                          </button>
                        </div>
                      </div>
                      <OutlineGrayButton
                        button="Contactează-ne"
                        rootClassName="outline-gray-button-root-class-name"
                      ></OutlineGrayButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container09">
          <section className="home-features">
            <a href="#certificare" className="home-link">
              <FeatureCard
                text="NUCI ALTOIȚI DE CALITATE CU CERTIFICARE NAȚIONALĂ ȘI EUROPEANĂ"
                title="NUCI ALTOIȚI"
                className="home-component03"
              ></FeatureCard>
            </a>
            <a href="#asistenta" className="home-link1">
              <FeatureCard
                text="ASISTENȚA NOASTRĂ LA ÎNFIINȚAREA ȘI GESTIUNEA PLANTAȚIEI"
                title="ASISTENȚA "
                image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-component04"
              ></FeatureCard>
            </a>
            <a href="#suport" className="home-link2">
              <FeatureCard
                text="LA VÂNZAREA NUCILOR DIN LIVADA TA DE CHANDLER"
                title="SUPORT GRATUIT "
                image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-component05"
              ></FeatureCard>
            </a>
            <a href="#exploreaza" className="home-link3">
              <FeatureCard
                text="DE CHANDLER INTRATE PE\n ROD ÎNFIINȚATE DE CHIPA NOASTRĂ"
                title="VIZITEAZĂ LIVEZI "
                image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-component06"
              ></FeatureCard>
            </a>
          </section>
        </div>
      </div>
      <div className="home-containerbody">
        <section className="home-container10">
          <div id="certificare" className="home-container11">
            <h1 className="home-text13 HeadingOne">
              <span className="home-text14"> NUCI ALTOIȚI DE CALITATE</span>
            </h1>
            <span className="home-text15 Lead">
              <span className="home-text16">
                {' '}
                CU CERTIFICARE NAȚIONALĂ ȘI EUROPEANĂ
              </span>
            </span>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <img
                alt="image"
                src="https://ucarecdn.com/f77dd53f-ada2-438f-96e5-8a2acc36195e/-/preview/-/quality/smart/"
                loading="lazy"
                className="home-image"
              />
              <span className="home-text17 Content">
                <span className="home-text18">
                  Soiurile Chandler, Tulare, Howard, Serr au un
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text19">Randament 3,5 - 5 tone/ha</span>
              </span>
              <div className="home-container14">
                <img
                  alt="image"
                  src="https://ucarecdn.com/b087a2af-0259-4ebc-aaa1-586df004c358/-/preview/-/quality/smart/"
                  loading="lazy"
                  className="home-image1"
                />
              </div>
            </div>
            <div className="home-container15">
              <img
                alt="image"
                src="https://ucarecdn.com/a3ffeeb2-d4c6-4bac-84ed-2f553e1a2654/-/preview/-/quality/smart/"
                loading="lazy"
                className="home-image2"
              />
              <div className="home-container16">
                <h3 className="home-text20 HeadingThree">
                  <span className="home-text21">
                    CERTIFICARE NAȚIONALĂ ȘI EUROPEANĂ
                  </span>
                </h3>
                <p className="home-text22 Body">
                  <span className="home-text23">
                    Pomii sunt crescuți cu respectarea celor mai stricte norme
                    privind puritatea varietală a soiurilor de către specialiști
                    cu experiență de câteva decenii în acest domeniu.
                  </span>
                  <span className="home-text24"></span>
                  <br></br>
                  <span className="home-text25">
                    Acordăm o atenție deosebită calității fiziologice și
                    fitosanitare la toate etapele de creștere pentru a vă livra
                    doar cei mai sănătoși și viabili pomi care se vor prinde în
                    proporție de ce puțin 99% în plantațiile voastre.
                  </span>
                  <span className="home-text26"></span>
                  <br></br>
                  <span className="home-text27">
                    Materialul săditor este pregătit și livrat în ambalaj
                    special care previne deshidratarea rădăcinilor și asigură
                    conservarea ideală a calității originale din pepinieră până
                    la momentul plantării.
                  </span>
                  <span className="home-text28"></span>
                  <br></br>
                  <span className="home-text29">
                    Pomii noștri sunt livrați către nucicultorii din Republica
                    Moldova, dar și la export în România, Ucriana, Federația
                    Rusă, Bulgaria, Polonia, Armenia și alte țări.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span></span>
                  <br></br>
                  <span className="home-text31">
                    Optați pentru cel mai de încredere producător de nuc altoit
                    din țară!!!
                  </span>
                  <span></span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="exploreaza" className="home-exploreaza">
          <div className="home-container17">
            <div className="home-container18">
              <div className="home-container19">
                <h2 className="home-text33 HeadingOne">
                  <span>
                    VIZITEAZĂ LIVEZI DE CHANDLER
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                </h2>
                <p className="home-text36 HeadingThree">
                  <span>INTRATE PE ROD ÎNFIINȚATE DE ECHIPA NOASTRĂ</span>
                  <span></span>
                </p>
                <p className="home-text39 Body">
                  <span>
                    Echipa Chandler Moldova dispune de un larg portofoliu de
                    proiecte de livezi de Chandler sau alte soiuri similare în
                    curs de implementare, deja plantate și în creștere sau
                    monitorizate de către experții noștri.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Pentru a vă inspira din proiectele realizate de noi
                    anterior, vă oferim posibilitatea de a vizita aceste
                    plantații, în diferite perioade ale anului și a studia
                    experiența altor producători, a discuta cu ei și a le adresa
                    diferite întrebări despre parcursul lor.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span></span>
                </p>
              </div>
            </div>
            <img
              alt="image"
              src="https://ucarecdn.com/adbfef83-01ba-4b1c-bf56-575141b00221/-/preview/-/quality/smart/"
              className="home-map"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="home-image3"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="home-top-wave-image"
          />
        </section>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text43">
              <span>50</span>
              <span>+</span>
            </h1>
            <span className="home-text46 HeadingThree">LIVEZI ÎNFIINȚATE</span>
            <span className="home-text47 Content">
              <span>
                ÎN MOLDOVA
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
          <div className="home-stat1">
            <h1 className="home-text50">
              <span>30+</span>
            </h1>
            <span className="home-text52 HeadingThree">
              <span>LIVEZI ÎNFIINȚATE</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <span></span>
            </span>
            <span className="home-text57 Content">ÎN ROMÂNIA</span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text58">
              <span>15</span>
              <span>+</span>
            </h1>
            <span className="home-text61 HeadingThree">CONTRACTE ANUALE</span>
            <span className="home-text62 Content">
              <span></span>
              <span> DE CONSULTANȚĂ</span>
              <span></span>
            </span>
          </div>
          <div className="home-stat3">
            <h1 className="home-text66">
              <span>8/7</span>
            </h1>
            <span className="home-text68 HeadingThree">SUPORT</span>
            <span className="home-text69 Content">
              ASISTENȚĂ &amp; DEPLASARE
            </span>
          </div>
        </div>
        <section className="home-contaier">
          <div id="asistenta" className="home-container20">
            <h2 className="home-text70 HeadingOne">
              CHANDLER, TULARE, HOWARD ȘI SERR
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <span className="home-text71 Lead">
              <span className="home-text72">
                Grupul de experți ai CHANDLER MOLDOV include și un producător
                profesionist autohton,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="home-text74"></span>
              <span className="home-text75">
                specializat pe creșterea pomilor altoiți de nuc din cele mai
                bune soiuri
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text76">
                americane
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="home-text78">
                CHANDLER , TULARE, HOWARD și SERR.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="home-container21">
            <div className="home-container22">
              <div className="home-container23"></div>
              <div className="home-container24">
                <svg viewBox="0 0 987.4285714285713 1024" className="home-icon">
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text79 HeadingOne">
                  <span>Randament</span>
                  <br></br>
                  <span>3.5 - 5</span>
                </h1>
                <span className="home-text83">
                  <span>Tone / HA</span>
                </span>
                <OutlineBlackButton button="oferta"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container25">
              <ListItemright
                title="1. Certificați și autentici soiului 100%"
                description="Certificați în sitemul național, dar și de către inspectori ai Uniunii Europene și autentici soiului 100%"
                rootClassName="list-itemright-root-class-name20"
              ></ListItemright>
              <ListItemright
                title="2. Siguri din punct de vedere fitosanitar"
                description="Siguri din punct de vedere fitosanitar"
                rootClassName="list-itemright-root-class-name21"
              ></ListItemright>
              <ListItemright
                title="3. Sistem radicular neegalat"
                description="Foarte bine dezvoltați, cu un sistem radicular neegalat"
                rootClassName="list-itemright-root-class-name22"
              ></ListItemright>
              <ListItemright
                title="4. Gata pentru subvenționare"
                description="Livrați oficial cu toată documentația oficială pentru subvenții"
                rootClassName="list-itemright-root-class-name23"
              ></ListItemright>
              <ListItemright
                title="5. Consultanță gratuită 3 ani"
                description="Includ consultanță gratuită înainte de plantare și 3 ani după înființarea livezii "
                rootClassName="list-itemright-root-class-name24"
              ></ListItemright>
            </div>
          </div>
          <div className="home-divider"></div>
          <div id="suport" className="home-container26">
            <h2 className="home-text85 HeadingOne">
              <span>SUPORT GRATUIT</span>
              <span></span>
            </h2>
            <span className="home-text88 Lead">
              <span>
                {' '}
                LA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                COMERCIALIZAREA NUCILOR SAU A MIEZULUI DE NUCĂ DIN LIVADA TA DE
                CHANDLER
              </span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="home-container27">
            <div className="home-container28">
              <ListItemright
                title="INFRASTRUCTURĂ"
                description="Membri ai echipei noastre, cât și prestatori de servicii în diferite regiuni ale țării pe care îi cunoaștem sunt gata  să colaboreze cu toți nucicultorii care nu dispun de infrastructura necesară pentru decojirea nucilor de coaja verde și spălarea corespunzătoare și vor să apeleze la prestări de servicii în acest sens. Vă vom ajuta să identificați cel mai apropiat punct de lucru și să vă punem în relație cu prestatorul respectiv și vă vom oferi unele detalii tehnice referitoare la procesul de decojire al nucilor din soiurile pe care le aveți."
                rootClassName="list-itemright-root-class-name30"
              ></ListItemright>
              <ListItemright
                title="PIAȚĂ DE DESFACERE"
                description="Unele companii neafiliate, dar cu care avem o colaborare foarte intensă, vor fi bucuroase să procure atât nucile în coajă, cât și miezul de nucă pe care clienții noștri îl vor oferi spre vânzare. Și aici vorbim despre o gamă mai largă de soiuri, nu doar cele americane. Producătorii care colaborează cu consultanții Chandler Moldova beneficiază din start de o anumită recunoaștere a calității și omogenității loturilor de nuci pe care le produc, fiind știut că experții noștri fie depun un efort maxim pentru a ajuta nucicultorii să obțină producții de calitate."
                rootClassName="list-itemright-root-class-name47"
              ></ListItemright>
            </div>
            <div className="home-container29">
              <div className="home-container30"></div>
              <div className="home-container31">
                <svg viewBox="0 0 1152 1024" className="home-icon2">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text92 HeadingOne">
                  <span>Ia legătura</span>
                  <br></br>
                  <span>cu noi</span>
                </h1>
                <a
                  href="mailto:chandlermoldova@gmail.com?subject=Mesaj site"
                  className="home-link4"
                >
                  <span>CHANDLERMOLDOVA@GMAIL.COM</span>
                </a>
                <OutlineBlackButton button="+37360192045"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Component1 rootClassName="component1-root-class-name4"></Component1>
    </div>
  )
}

export default Home
