import "./App.css";

import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ThreeReasons from "./components/ThreeReasons/ThreeReasons";
import { Layout } from "./layout/Layout";

import Theme from "./styles/theme";

function App() {
  return (
    <Theme>
      <div className="App">
        <Layout>
          <Hero />
          <ThreeReasons />
          <AboutUs />
          <Services />
        </Layout>
      </div>
    </Theme>
  );
}

export default App;
