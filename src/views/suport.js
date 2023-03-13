import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlocTextLeft1 from '../components/bloc-text-left1'
import ListItemright from '../components/list-itemright'
import PostCardsuport1 from '../components/post-cardsuport1'
import Component1 from '../components/component1'
import './suport.css'

const Suport = (props) => {
  return (
    <div className="suport-container">
      <Helmet>
        <title>Asistenta | Chandler Moldova</title>
        <meta
          name="description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului care și-au unit eforturile pentru a oferi cele mai calitative produse servicii ..."
        />
        <meta property="og:title" content="Asistenta | Chandler Moldova" />
        <meta
          property="og:description"
          content="Chandler Moldova, prestatori de servicii și experți ai culturii nucului"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f8825927-f596-443f-8221-3a33b2d13af9/94cb74ff-796a-4fb5-b9b4-7e0120dff081?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="suport-container01"></div>
      <section className="suport-asistenta">
        <div className="suport-containertitle">
          <h2 className="suport-text">ASISTENȚA NOASTRĂ</h2>
          <span className="suport-text01">
            <span>
              LA ETAPA PRE-FEZABILITĂȚII, PROIECTĂRII PLANTAȚIEI,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>PICHETĂRII ȘI LA PLANTAREA POMILOR</span>
          </span>
        </div>
        <div className="suport-container02">
          <div className="suport-container03">
            <BlocTextLeft1></BlocTextLeft1>
            <BlocTextLeft1
              text="Odată identificat lotul pentru înființarea livezii de nuc, proiectantul nostru va examina profilul terenului, expoziția, înclinarea, etc. și va preleva probe de sol pentru o analiză chimică"
              heading="Examinarea parcelei și analiza solului"
              rootClassName="bloc-text-left1-root-class-name2"
            ></BlocTextLeft1>
            <BlocTextLeft1
              text="În funcție de preferințele beneficiarului, ținând cont de particularitățile terenului și a unor factori de producție (irigare, etc.) și de opinia echipei Chandler Moldova, va fi selectat cel mai bun și adaptat soi pentru fiecare proiect de livadă de nuc"
              heading="Alegerea celui mai potrivit soi"
            ></BlocTextLeft1>
          </div>
          <div className="suport-container04">
            <img
              alt="image"
              src="https://ucarecdn.com/7f844ecb-4b6a-48ac-aa07-bfbe4c654566/-/preview/-/quality/smart/"
              className="suport-image"
            />
            <img
              alt="image"
              src="https://ucarecdn.com/23ad19c7-e7c9-480f-9b09-60a79342323e/-/preview/-/quality/smart/"
              className="suport-image1"
            />
          </div>
          <div className="suport-container05">
            <ListItemright
              title="Elaborarea proiectului livezii"
              description="Expertul nostru pe proiectare va elabora proiectul tehnic al plantației de nuc care este un pașaport și document fundamental al viitoarei livezi"
              rootClassName="list-itemright-root-class-name32"
            ></ListItemright>
            <ListItemright
              title="Parcelarea și pichetarea terenului"
              description="Tehnicianul nostru se deplasează în teren și efectuează parcelarea terenului și instruiește personalul beneficiarului cum se efectuează corect pichetarea sau marcarea fiecărui loc unde vor fi plantați pomii"
              rootClassName="list-itemright-root-class-name33"
            ></ListItemright>
            <ListItemright
              title="Participarea unui specialist la plantare"
              description="Reprezentantul pepinierei sau oricare alt membru calificat al echipei Chandler Moldova asistă la plantare și se asigură că plantatorii respectă toate instrucțiunile noastre"
              rootClassName="list-itemright-root-class-name34"
            ></ListItemright>
          </div>
        </div>
        <div className="suport-container06">
          <h2 className="suport-text04">
            <span>
              La solicitarea clienților noștri, echipa noastră poate presta
              servicii de plantare a livezii
            </span>
            <br></br>
            <span></span>
          </h2>
        </div>
      </section>
      <div className="suport-dividergradient"></div>
      <section className="suport-exploreaza">
        <div className="suport-container07">
          <img
            alt="image"
            src="https://ucarecdn.com/adbfef83-01ba-4b1c-bf56-575141b00221/-/preview/-/quality/smart/"
            className="suport-map"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="suport-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="suport-image2"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="suport-top-wave-image"
        />
      </section>
      <section className="suport-asistena-post-plantare">
        <div className="suport-containertitle1">
          <h2 className="suport-text07">
            <span>
              ASISTENȚA NOASTRĂ POST-PLANTARE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span></span>
          </h2>
          <span className="suport-text10">
            <span>
              ACOMPANIAMENT TEHNIC PE ÎNTREȚINEREA SOLULUI, FORMAREA COROANEI,
              FERTILIZARE, PROTECȚIE FITO
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="suport-container08">
          <div className="suport-container09">
            <BlocTextLeft1
              text="Odată cu livrarea materialului săditor, Chandler Moldova vă oferă gratuit un ghid-instrucțiune cu recomandări practice privind toate lucrările care trebuie efectuate în plantația tânără de nuc"
              heading="Ghid profesional pt primii 4 ani"
              rootClassName="bloc-text-left1-root-class-name"
            ></BlocTextLeft1>
            <BlocTextLeft1
              text="Toți clienții care achiziționează pomi altoiți de nuc de la pepiniera Chandler Moldova beneficiază de consultanță gratuită în primii trei ani de la plantare. În parte, comunicarea informațiilor se face la distanță: telefonic, pe platofrme online sau, în caz de necesitate, prin deplasare în teren. "
              heading="Consultanță gratuită în primii 3 ani"
              rootClassName="bloc-text-left1-root-class-name1"
            ></BlocTextLeft1>
          </div>
          <div className="suport-container10">
            <img
              alt="image"
              src="https://ucarecdn.com/0164d3fe-dc37-450e-9bd4-0ab6754cce20/-/preview/-/quality/smart/"
              className="suport-image3"
            />
          </div>
          <div className="suport-container11">
            <ListItemright
              title="Acompaniament tehnic permanent"
              description="La expirarea avantajului de consultanță gratuită de 3 ani, experții noștri vor fi bucuroși să vă ofere suport și recomandări în continuare. O parte din informațiile comunicate vor fi în continuare oferite gratuit, dar vă vom oferi posibilitatea acompanierii tehnice profesionale foarte punctuale în baza unui contract anual de consultanță."
              rootClassName="list-itemright-root-class-name35"
            ></ListItemright>
            <ListItemright
              title="Suport la comercializarea producției"
              description="Vă ajutăm să comercializați producția de nuci din livezile voastre, fie ca nucă în coajă, fie ca miez de nucă. Mai mult decât atât, în rețeaua parteneriatelor noastre, vă vom putea oferi servicii de prelucrare post-recoltă a producției de nuci (decojire coajă verde, spălare, uscare, calibrare). "
              rootClassName="list-itemright-root-class-name36"
            ></ListItemright>
          </div>
        </div>
        <div className="suport-container12">
          <h2 className="suport-text13">
            <span>
              {' '}
              Vă oferim toată expertiza pe care o deținem în domeniu
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>și un întreg spectru de servicii profesionale</span>
            <br></br>
            <span></span>
          </h2>
        </div>
      </section>
      <section className="suport-exploreaza1">
        <div className="suport-container13">
          <img
            alt="image"
            src="https://ucarecdn.com/adbfef83-01ba-4b1c-bf56-575141b00221/-/preview/-/quality/smart/"
            className="suport-map1"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="suport-bottom-wave-image1"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="suport-image4"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="suport-top-wave-image1"
        />
      </section>
      <div className="suport-dividergradient1"></div>
      <div className="suport-asistenta-tehnica">
        <PostCardsuport1 image_src="https://ucarecdn.com/b4903b53-c72d-4fb3-b1dd-0119b0c5c885/-/preview/-/quality/smart/"></PostCardsuport1>
        <div className="suport-container14">
          <PostCardsuport1
            text="PARTICIPARE GRATUITĂ LA TOATE SEMINARELE ORGANIZATE DE C-M"
            text1="Chandler Moldova organizează periodic seminare și instruiri pentru nucicultorii din Moldova și România. În cadrul acestor evenimente veți avea posibilitatea să aflați ultimele inovații, tendințe din domeniu, veți putea interacționa cu alți nucicultori, atât începători, cât și profesioniști, să întâlniți și să stabiliți contacte cu reprezentanți ai companiilor care achiziționează nuci în coajă și miez de nucă de la producători. Pentru toți clienții C-m participarea este gratuită pe viață!"
            image_src="https://ucarecdn.com/7ee7943d-8d04-4db0-8416-c8755b33b3d2/-/preview/-/quality/smart/"
            rootClassName="post-cardsuport1-root-class-name5"
          ></PostCardsuport1>
          <PostCardsuport1
            text="GHID PROFESIONAL PENTRU PRIMII 4 ANI DE LA PLANTARE"
            text1="Odată cu livrarea materialului săditor, Chandler Moldova vă oferă gratuit un ghid-instrucțiune cu recomandări practice privind toate lucrările care trebuie efectuate în plantația tânără de nuc. Ghidul conține informații unice, acumulate prin prisma experților noștri, testate pentru a vă aduce rezultate rapide în plantația înființată. Acest ghid este un ajutor indispensabil oricărui nucicultor experimentat sau începător."
            image_src="https://ucarecdn.com/b4cd08ed-5cfb-4bc2-afad-3d5f6437451e/-/preview/-/quality/smart/"
            rootClassName="post-cardsuport1-root-class-name6"
          ></PostCardsuport1>
        </div>
        <PostCardsuport1
          text="ACOMPANIAMENT TEHNOLOGIC PROFESIONIST ÎN LIVEZI PE ROD"
          text1="Consultanții noștri vă vor oferi periodic informații despre toate lucrările pe care trebuie să le efectuați în livezile intrate pe rod. Vă vor comunica detalii despre ce îngrășăminte radiculare și foliare trebuie să aplicați, în ce doze, în ce modalitate și în ce perioadă. Vă vom ajuta să implementați programe de protecție fitosanitară integrată. La fel, vă vom consulta și pe aspecte legate de recoltarea și procesarea primară a nucilor. Vă vom oferi oportunitatea de a vizita nucicultori de succes."
          image_src="https://ucarecdn.com/5d9df699-4fe7-4be3-8f29-69efbcf677dc/-/preview/-/quality/smart/"
        ></PostCardsuport1>
      </div>
      <div className="suport-dividergradient2"></div>
      <section className="suport-exploreaza2">
        <div className="suport-container15">
          <img
            alt="image"
            src="https://ucarecdn.com/adbfef83-01ba-4b1c-bf56-575141b00221/-/preview/-/quality/smart/"
            className="suport-map2"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="suport-bottom-wave-image2"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="suport-image5"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="suport-top-wave-image2"
        />
      </section>
      <div className="suport-containertitle2">
        <h2 className="suport-text17">
          <span>SUPORT GRATUIT</span>
          <span></span>
          <span></span>
        </h2>
        <span className="suport-text21">
          <span>
            LA COMERCIALIZAREA NUCILOR SAU A MIEZULUI DE NUCĂ DIN LIVADA TA DE
            CHANDLER
          </span>
          <span></span>
          <br></br>
          <span></span>
        </span>
      </div>
      <div className="suport-asistenta-comercializare">
        <div className="suport-container16"></div>
        <div className="suport-container17">
          <div className="suport-blog-post-card">
            <img
              alt="image"
              src="https://ucarecdn.com/1dbe9d42-33fc-4e53-8ff5-1d06eed88a86/-/preview/-/quality/smart/"
              className="suport-image6"
            />
            <div className="suport-container18">
              <span className="suport-text25 Body">
                <span>
                  Membri ai echipei noastre, cât și prestatori de servicii în
                  diferite regiuni ale țării pe care îi cunoaștem sunt gata să
                  colaboreze cu toți nucicultorii care nu dispun de
                  infrastructura necesară pentru decojirea nucilor de coaja
                  verde și spălarea corespunzătoare și vor să apeleze la
                  prestări de servicii în acest sens.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Vă vom ajuta să identificați cel mai apropiat punct de lucru
                  și să vă punem în relație cu prestatorul respectiv și vă vom
                  oferi unele detalii tehnice referitoare la procesul de
                  decojire al nucilor din soiurile pe care le aveți.
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className="suport-container19">
          <div className="suport-blog-post-card1">
            <img
              alt="image"
              src="https://ucarecdn.com/51eae3bf-3fbe-4494-b19d-ac606fc67523/-/preview/-/quality/smart/"
              className="suport-image7"
            />
            <div className="suport-container20">
              <span className="suport-text30 Body">
                <span>
                  Unele companii neafiliate, dar cu care avem o colaborare
                  foarte intensă, vor fi bucuroase să procure atât nucile în
                  coajă, cât și miezul de nucă pe care clienții noștri îl vor
                  oferi spre vânzare. Și aici vorbim despre o gamă mai largă de
                  soiuri, nu doar cele americane. Producătorii care colaborează
                  cu consultanții Chandler Moldova beneficiază din start de o
                  anumită recunoaștere a calității și omogenității loturilor de
                  nuci pe care le produc, fiind știut că experții noștri fie
                  depun un efort maxim pentru a ajuta nucicultorii să obțină
                  producții de calitate.
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className="suport-container21"></div>
      </div>
      <Component1 rootClassName="component1-root-class-name"></Component1>
    </div>
  )
}

export default Suport
