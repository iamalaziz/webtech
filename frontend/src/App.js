import AboutUs from './components/AboutUs/AboutUs';
import Hero from './components/Hero/Hero';
import ThreeReasons from './components/ThreeReasons/ThreeReasons';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Layout } from './layout/Layout';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Layout>
        <BurgerMenu isOpen = {isOpen} handleToggle={handleToggle} />
        <Hero />
        <ThreeReasons />
        <AboutUs />
      </Layout>
    </div>
  );
}

export default App;
