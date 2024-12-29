import React from "react";
import PhotoNG from "../../assets/photo_ng01.JPG"

const Home = (props) => {

  return <>
    <main>
      <div className="image-container full-width">
        <img src={PhotoNG} alt=""/>
      </div>
      <p>Sitemiz yapım aşamasındadır. Randevu için iletişim bilgilerini aşağıda bulabilirsiniz.</p>
      <section>
        <h3>Randevu Bilgileri</h3>
        <dl>
          <dt htmlFor="">Telefon:</dt>
          <dd>0212 240 61 32</dd>
          <dt htmlFor="">Faks:</dt>
          <dd>0212 240 60 03</dd>
          <dt htmlFor="">GSM:</dt>
          <dd>0530 696 70 12</dd>
          <dt htmlFor="">E-Posta:</dt>
          <dd>info@nurperigazioglu.com</dd>
        </dl>
      </section>
    </main>

  </>
}

Home.defaultProps = {
  
};

export default Home