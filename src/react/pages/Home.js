import React from "react";
import PhotoNG from "../../assets/photo_ng01.JPG"

const Home = (props) => {

  return (
    <main>
      <div className="image-container full-width">
        <img src={PhotoNG} alt="" />
      </div>
      <p>
        Sitemiz yapım aşamasındadır. Randevu için iletişim bilgilerini aşağıda
        bulabilirsiniz.
      </p>
      <section>
        <h3>Randevu Bilgileri</h3>
        <dl>
          <dt>Telefon:</dt>
          <dd>
            <a href="tel:+902122406132">0212 240 61 32</a>
          </dd>
          <dt>Faks:</dt>
          <dd>
            <a href="tel:+902122406003">0212 240 60 03</a>
          </dd>
          <dt>GSM:</dt>
          <dd>
            <a href="tel:+905306967012">0530 696 70 12</a>
          </dd>
          <dt>E-Posta:</dt>
          <dd>
            <a href="mailto:info@nurperigazioglu.com">info@nurperigazioglu.com</a>
          </dd>
        </dl>
      </section>
    </main>
  );
}

Home.defaultProps = {

};

export default Home