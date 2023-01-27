import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import './assets/Fonts/Revamped-X3q1a.ttf';

import Header from "../src/layout/Header";
import Footer from "./layout/Footer";

import About from './pages/about';
import Home from './pages/home';
import Contacts from './pages/contacts';

const App: React.FC = (): JSX.Element => {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Contacts" element={<Contacts />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;
