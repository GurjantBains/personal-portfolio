import { useState } from 'react';
import './app.scss'
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from "./components/navbar/Navbar"
import Parralex from './components/parralex/Parralex';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  const [behaviour, setbehaviour] = useState("just")
  return <div>
    <Cursor behaviour={behaviour}/>
    <section>
      <Navbar setb={setbehaviour}/>
      <Hero/>
    </section>
    <section><Parralex type="services"/></section>
    <section><Services/></section>
    <section><Parralex type="portfolio"/></section>
    <Portfolio/>
    <section>Home</section>
  </div>;
};

export default App;
