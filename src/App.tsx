import './App.css';
import './assets/Fonts/Revamped-X3q1a.ttf';

import Header from "../src/layout/Header";
import Footer from "./layout/Footer";

import Home from './pages/home';
const App: React.FC = (): JSX.Element => {

  return (
      <div className="App">
          <Header />
          <Home />
          <Footer />
      </div>
  )
}

export default App;
