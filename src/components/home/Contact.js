import React from "react";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";

const styles = {
  miniHR: {
    backgroundColor: "white",
    height: "4px",
    width: "10vw",
    margin: "auto",
    marginBottom: "20px"
  }
};

const Contact = () => (
  <div className="contact-home">
    <div className="home-overlay">
      <div className="contact-items" style={{ paddingTop: 50 }}>
        <h2 className="home_subsection_white">
          Contactez <span style={{ color: "#ff8900" }}>One Team</span>
        </h2>
        <hr className="hr_horizontal_white" />

        <h2 style={{ color: "white", fontWeight: "normal" }}>
          Vous souhaitez en savoir plus..
        </h2>
        <h2 style={{ color: "white", fontWeight: "normal" }}>Gérard Magro</h2>
        <p style={{ color: "white", fontWeight: "normal", margin: "0" }}>
          06.18.44.88.20
        </p>
        <p style={{ color: "white", fontWeight: "normal", margin: "0" }}>
          gerard.magro@one-team.fr
        </p>
        <div style={{ marginTop: "50px" }}>
          <img className="social-media" src={facebook} alt="facebook" />
          <img className="social-media" src={twitter} alt="facebook" />
        </div>
        <div>
          <nav>
            <ul className="nav-footer" style={{ margin: 0 }}>
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
    </div>
  </div>
);
export default Contact;
