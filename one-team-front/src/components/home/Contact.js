import React from "react";
import facebook from "../../img/facebook.png";
// import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";

const Contact = () => (
  <div className="contact-home general_margin">
    <h2>Contactez-nous</h2>
    <h3 style={{ color: "#605b55" }}>Vous souhaitez en savoir plus..</h3>
    <p>Appelez-nous, nous serons ravis d’échanger avec vous sur vos projets.</p>
    <h4>
      <span style={{ color: "#605b55" }}>Contact</span> : Gérard Magro
    </h4>
    <p>06.18.44.88.20</p>
    <p>gerard.magro@one-team.fr</p>
    <div>
      <img className="social-media" src={facebook} alt="facebook" />
      {/* <img className="social-media" src={instagram} alt="facebook" /> */}
      <img className="social-media" src={twitter} alt="facebook" />
    </div>
    <div>
      <nav>
        <ul className="nav-footer">
          <li>
            <a href="#">Mentions Légales</a>
          </li>
          <li>
            <a href="#">CGU</a>
          </li>
          <li>
            <a href="#">Confidentialité</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
export default Contact;
