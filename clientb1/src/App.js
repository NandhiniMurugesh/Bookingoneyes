import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/footer';
import { Home } from './components/Home/home';
import { Registration } from './components/Signin/Signup/register';
import { Login } from './components/Signin/login';
import { Admindashboard } from './components/Admindashboard/admindashboard';
import { Userdashboard } from './components/Userdashboard/userdashboard';
import { Adminlocation } from './components/Location/Location display/adminlocation';
import { Addloc } from './components/Location/Addlocation/addloc';
import { Addspot } from './components/Spot/Addspot/addspot';
import { Adminspot } from './components/Spot/Adminspot/adminspot';
import { Locationupdate } from './components/Location/Updatelocation/updatelocation';
import { Spotupdate } from './components/Spot/Updatespot/updatespot';
import { Userdetails } from './components/User/Userdisplay/userdisplay';
import { Userupdate } from './components/User/Userupdate/userupdate';
import { Admintransport } from './components/Transport/Admintransport/admintransport';
import { Addtrans } from './components/Transport/Addtransport/addtrans';
import { Updatetrans } from './components/Transport/Updatetrans/updatetrans';
import { Addhotel } from './components/Hotel/Addhotel/addhotel';
import { Adminhotel } from './components/Hotel/Adminhotel/adminhotel';
import { Updatehotel } from './components/Hotel/Updatehotel/updatehotel';
import { Singlehotel, Userhotel } from './components/Hotel/Single hotel/singlehotel';
import { Userlocation } from './components/Location/Userlocation/userlocation';
import { Flightdisplay } from './components/Flight/flightdisplay';
import { Flight } from './components/Flight/flight';
import { Cardisplay } from './components/Car/cardisplay';
import { Car } from './components/Car/car';
import { Singleflight } from './components/Flight/singleflight';
import { Homelocation } from './components/Hotel/Homelocation/homelocation';
import { Userspot } from './components/Spot/Userspot/userspot';
import { Userlocationdisplay } from './components/Location/Location display/userlocationdisplay';
import { Singlecar } from './components/Car/singlecar';

function App() {
  return (
    <>
 
 <BrowserRouter>
      <Routes>

     
      <Route path="/" element={<Home/>}/>
      <Route path="/admindashboard/:uid" element={<Admindashboard/>}/>
      <Route path="/userdashboard/:uid" element={<Userdashboard/>}/>
      <Route path="/adminlocation" element={<Adminlocation/>}/>
      <Route path="/adminspot/:lid" element={<Adminspot/>}/>
      <Route path="/admintransport" element={<Admintransport/>}/>
      <Route path="/adminhotel" element={<Adminhotel/>}/>
      <Route path="/updateloc/:lid" element={<Locationupdate/>}/>
      <Route path="/updatespot/:sid" element={<Spotupdate/>}/>
      <Route path="/updateuser/:uid" element={<Userupdate/>}/>
      <Route path="/updatetrans/:tid" element={<Updatetrans/>}/>
      <Route path="/updatehotel/:hid" element={<Updatehotel/>}/>
      <Route path="/addloc" element={<Addloc/>}/>
      <Route path="/addspot" element={<Addspot/>}/>
      <Route path="/addtrans" element={<Addtrans/>}/>
      <Route path="/addhotel" element={<Addhotel/>}/>
      <Route path="/userdisplay" element={<Userdetails/>}/>
      <Route path="/userlocation/:lid" element={<Userlocation/>}/>
      <Route path="/userspot/:lid" element={<Userspot/>}/>
      <Route path="/homelocationdisplay" element={<Userlocationdisplay/>}/>
      <Route path="/userspot/:lid" element={<Userspot/>}/>
      <Route path="/flightdisplay" element={<Flightdisplay/>}/>
      <Route path="/cardisplay" element={<Cardisplay/>}/>
      <Route path="/flight/:lid/:transtype" element={<Flight/>}/>
      <Route path="/flight/:lid/:transtype/:tid" element={<Singleflight/>}/>
      <Route path="/singlecar/:lid/:transtype/:tid" element={<Singlecar/>}/>
      <Route path="/car/:lid/:transtype" element={<Car/>}/>
      <Route path="/singlehotel/:hid" element={<Singlehotel/>}/>
      <Route path="/homelocation" element={<Homelocation/>}/>


      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>

     

    
      </Routes>
      </BrowserRouter>
    
      
    </>
  );
}

export default App;
