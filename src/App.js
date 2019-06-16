import React from 'react';
import Header from './components/Header';
import PrimaryButton from './components/PrimaryButton';
import InfoSection from './components/InfoSection';
import logo from './assets/media/logo-min.svg';
import './assets/style/main.scss';

function App() {
  return (
    <div className="metropolis">
      <Header />
      <div className="metropolis__container">
        <section className="hero">
          <div className="hero__copy">
            <h1 className="hero__copy--title">
              Una nueva forma de viajar en tu ciudad
            </h1>
            <p className="hero__copy--subtitle">
              Una app con todas las opciones de transporte local, c&oacute;moda, inteligente y sencilla.
            </p>
            <PrimaryButton copy="Descarga la app"/>
          </div>
          <div className="hero__card" />
          <div className="hero__path1" />
        </section>
        <section className="info-section">
          <InfoSection />
        </section>
      </div>
      <footer className="metropolis__footer">
        <div className="footer__content">
          <img src={logo} className="footer__content--logo" alt="logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
