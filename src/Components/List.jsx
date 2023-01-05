import React from 'react';

function List() {
  return (
    <section className="listContainer">
      <ul className="leftContainer">
        <li>
          <h2>Solf Skills</h2>
          <p>
            1.Criatividade
            <br />
            2.Curiosidade
            <br />
            3.Esculta Ativa
            <br />
            4.Adaptação
            <br />
            5.Determinação
          </p>
        </li>
        <li>
          <h2>Hard Skills</h2>
          <p>
            1.CSS
            <br />
            2.HTML
            <br />
            3.JavaScript
            <br />
            4.React
            <br />
            5.C#
          </p>
        </li>
      </ul>
      <div className="aboutMeContainer">
        <h3>Olá estranho!</h3>
        <p>
          Meu nome é Yasmin Amorin, moradora de Florianopolis, SC. <br />
          Sou Desenvoledora Web - Front-end, apaixonada por arte, tecnologia e criar coisas. <br />
          Atualmente sou estudande de Desenvolvimento Web - Full Stack na Trybe e estou aprendendo POO(Programação Orientada a Objetos)
          e outras tecnologias do Back-End. <br />
          <br />
          No lado esquerdo do site você verá minhas listas de Solft Skills e Hard Skils favoritas. <br />
          E no lado direito meus interesses e algumas curiosidades sobre mim. <br />
          No menu acima você encontrará o link para os meus projetos e meus contatos. <br />
          Não seja um estranho! Conecte-se comigo!
        </p>
      </div>
      <ul className="rightContainer">
        <li>
          <h2>Interesses</h2>
          <p>
            1.Tecnologia
            <br />
            2.Arte
            <br />
            3.Jogos
            <br />
            4.Musica
            <br />
            5.Leitura
          </p>
        </li>
        <li>
          <h2>Curiosidades</h2>
          <p>
            1.Eu já desenvolvi um Jogo.
            <br />
            2.Eu estou aprendendo a tocar teclado.
            <br />
            3.Eu tenho um gato chamado Aslam.
            <br />
            4.Eu coleciono hobbies.
            <br />
            5.Meu sonho é viajar pelo mundo.
          </p>
        </li>
      </ul>

    </section>
  );
}
export default List;
