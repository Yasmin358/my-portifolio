import React from 'react';
import Header from '../Components/HeaderHome';
import '../styles/home.css';
import pattern from '../images/patternHome.png';

function Home() {
  return (
    <main className="mainHome" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="container">
        <h1>Olá Estranho!</h1>
        <section>
          <p>
            Meu nome é Yasmin, sou Desenvolvedora Web - FrontEnd e esse é meu portfólio.
            <br />
            Aqui você encontrará informações sobre mim e alguns dos meus projetos.
            <br />
            Não seja um estranho, conecte-se comigo!
          </p>
        </section>
        <Header />
        <p>
          <q>
            Diante de mim havia duas estradas,
            eu escolhi a estrada menos percorrida,
            e isso fez toda a diferença.
          </q>
          <b>Robert Frost</b>
        </p>
      </div>
    </main>
  );
}

export default Home;
