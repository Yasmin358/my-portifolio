import React from 'react';
import Header from '../Components/Header';
import linkedin from '../images/linkedin.png';
import '../styles/contact.css';
import pattern from '../images/pattern4.png';
import GitHub from '../images/github.png';
import itch from '../images/itch.png';
import Email from '../images/gmail.png';
import Twitter from '../images/twitter.png';
import Skoob from '../images/skoob.png';

function Contact() {
  return (
    <section className="body">
      <main className="main" style={{ backgroundImage: `url(${pattern})` }}>
        <Header title="Contato" />
        <div className="contactContainer">
          <a href="https://www.linkedin.com/in/yasminamorins/">
            <img src={linkedin} alt="Logo-Linkedin" />
            Linkedin
          </a>
          <a href="mailto:amorin.yasmin378@gmail.com">
            <img src={Email} alt="Logo-gmail" />
            Email
          </a>
          <a href="https://github.com/Yasmin358">
            <img src={GitHub} alt="Logo-gitHub" />
            GitHub
          </a>
          <a href="https://yasminamorins.itch.io/">
            <img src={itch} alt="Logo-Itch.io" />
            Itch.io
          </a>
          <a href="https://twitter.com/yasminAmorin358">
            <img src={Twitter} alt="Logo-Twitter" />
            Twitter
          </a>
          <a href="https://www.skoob.com.br/usuario/582197-yaya67">
            <img src={Skoob} alt="Logo-Skoob" />
            Skoob
          </a>
        </div>
      </main>
    </section>
  );
}

export default Contact;
