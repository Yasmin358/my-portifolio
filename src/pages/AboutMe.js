import React from 'react';
import Header from '../Components/Header';
import '../styles/aboutMe.css';
import '../styles/projects.css';
import pattern from '../images/pattern2.png';
import List from '../Components/List';

class About extends React.Component {
  render() {
    return (
      <section className="body" style={{ backgroundImage: `url(${pattern})` }}>
        <main className="main">
          <Header title="Sobre Mim" />
          <List />
        </main>
      </section>
    );
  }
}

export default About;
