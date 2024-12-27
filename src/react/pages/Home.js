import React from "react";

import LogoSVG from "../../assets/LOGO.svg"
import PhotoNG from "../../assets/photo_ng01.JPG"

const Home = (props) => {

  return <>

    <header>
      <LogoSVG />
      <h2>Prof. Dr. Nurperi Gazioglu</h2>
    </header>
    <main>
      <img src={PhotoNG} alt="" />
      <p>Sitemiz yapım aşamasındadır. Randevu için iletişim bilgilerini aşağıda bulabilirsiniz.</p>
      <section>
        <h3>Randevu Bilgileri</h3>
        <ul>
          <li>
            <label htmlFor="">Telefon:</label>
            <p>0212 240 61 32</p>
          </li>
          <li>
            <label htmlFor="">Faks:</label>
            <p>0212 240 60 03</p>
          </li>
          <li>
            <label htmlFor="">GSM:</label>
            <p>0530 696 70 12</p>
          </li>
          <li>
            <label htmlFor="">E-Posta:</label>
            <p>info@nurperigazioglu.com</p>
          </li>
        </ul>
      </section>
    </main>

  </>
}

Home.defaultProps = {
  
};

export default Home