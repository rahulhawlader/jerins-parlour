import Navber from './Pages/Shared/Navber/Navber';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import OurPortfolio from './Pages/Portfolio/OurPortfolio';
import OurTeam from './Pages/Team/OurTeam';
import Contack from './Pages/Contack/Contack';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer'


function App() {
  return (
    <>
      <Navber />
      <div className='sm:min-w-sm mx-auto px-12'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/portfolio" element={<OurPortfolio />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
          <Route path="/contack" element={<Contack />}></Route>
          <Route path="/login" element={<Login />}></Route>



        </Routes>



      </div>
      <Footer />
    </>
  );
}

export default App;
