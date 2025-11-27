import './App.css';
import Homepage from './pages/Homepage';
import GrowthInnovation from './pages/Growth_Innovation';
import UpNext from './pages/UpNext';
import Annualevents from './pages/Annualevents';
import CommunityTestimonials from './pages/CommunityTestimonials';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Tools_Partners from './pages/Tools_Partners';
import Founder from './pages/Founder';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">

      {/* <Router>
      <Routes>
         <Route path="/" element={<Homepage />} /> 
        <Route path="/Growth-innovation" element={<GrowthInnovation  />} />
        <Route path="/Up-next" element={<UpNext />} />
        <Route path="/Annual-events" element={<Annualevents />} />
      </Routes>
    </Router> */}

      <Homepage />
      <GrowthInnovation />
      <UpNext />
      <Annualevents />
      <CommunityTestimonials />
      <Tools_Partners />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
