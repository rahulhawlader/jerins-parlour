import Navber from './Pages/Shared/Navber/Navber';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import OurPortfolio from './Pages/Portfolio/OurPortfolio';
import OurTeam from './Pages/Team/OurTeam';
import Contack from './Pages/Contack/Contack';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer'
import Appoinment from './Pages/Appoinment/Appoinment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashbord/Dashboard';
import MyAppoinment from './Pages/Dashbord/MyAppoinment';
import MyReview from './Pages/Dashbord/MyReview';
import AllUsers from './Pages/Dashbord/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';


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
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/appoinment" element={

            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }></Route>
          <Route path="/dashboard" element={

            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route index element={<MyAppoinment />}></Route>
            <Route path='myreview' element={<MyReview />}></Route>
            <Route path='user' element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>

            }></Route>

          </Route>



        </Routes>


        <ToastContainer />

      </div>
      <Footer />
    </>
  );
}

export default App;
