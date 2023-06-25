import AboutUs from './components/AboutUs/AboutUs';
import Hero from './components/Hero/Hero';
import ThreeReasons from './components/ThreeReasons/ThreeReasons';
import { Layout } from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <ThreeReasons />
        <AboutUs />
      </Layout>
    </div>
  );
}

export default App;
