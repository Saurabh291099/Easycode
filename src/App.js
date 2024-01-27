import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landingpage from './Components/Landingpage';
import './Style/Responsive.css'
import Contact from './Components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Pages/Projects/Projects';
import Templates from './Pages/Template/Templates';
import TempPreview from './Pages/Template/TempPreview';
import Components from './Pages/Components/Components';
import Accordian from './Pages/Components/Accordian';
import Buttons from './Pages/Components/Buttons';


function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/preview" element={<TempPreview />} />
          <Route path="/contact" element={<Contact />} />

          {/* Components Routes  */}
          <Route path="/components" element={<Components />} />
          <Route path="/components/accordians" element={<Accordian />} />
          <Route path="/components/buttons" element={<Buttons />} />


        </Routes>

        
        <Footer />
      </Router>
    </>
  );
}

export default App;
