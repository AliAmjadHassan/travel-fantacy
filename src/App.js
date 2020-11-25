import React from "react";
//import Counter from './components/Counter';
// with import
//import logo from "./neelum_valley_ajk.jpg"; // with import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
//import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/Contactus";
import Tours from "./components/Tour/Tours";
import Become_a_host from "./components/Host/Become_a_host";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Blog from "./components/Blog";
//import Signup from "./components/Signup";
import Product from "./components/products";
import Hotels from "./components/Hotels/Hotels";
import addHotel from "./components/Admin/fragments/AddHotel";
import Aboutus from "./components/Aboutus";
import Itinerary from "./components/Itinerary";
import Compare from "./components/Hotels/compare";
import Dashboard from "./components/Admin/Dashboard"
import UserDashboard from "./components/User/Dashboard"
import GuideDashboard from "./components/Guide/Dashboard"
import HotelBooking from "./components/Hotels/HotelBooking";
import HotelDetail from "./components/Hotels/HotelDetail";
import HotelView from "./components/Admin/fragments/HotelView";
import AddRoom from "./components/Admin/fragments/AddRoom";
import AllRooms from "./components/Admin/fragments/AllRooms";
import placeDetail from "./components/Places/PlacesToVisit";
import RoomView from "./components/Admin/fragments/RoomView";
import RoomDetail from "./components/Hotels/RoomDetail";
import BookTour from './components/Bookings/BookTour'
import './App.css';
// const handlAddToCartClick = (title) => {
//   alert("Add to cart clicked for " +title);
// };

function App() {
  // const[count,setCount] = React.useState(5);
  // const handleIncrement = () => {
  //     setCount(count + 1);
  // };
  // const handleDecrement = () => {
  //     setCount(count - 1);
  // };

  return (
    <Router>
      <div>
        {/* <h1 style = {{backgroundColor:"aqua"}}> Products Details </h1>  */}
        <TopMenu />
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/Tours" component={Tours} />
          <Route path="/Become_a_host" component={Become_a_host} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/hotel/add" component={addHotel} />
          <Route path="/HotelDetail" component={HotelDetail} />
          <Route path="/HotelBooking" component={HotelBooking} />
          <Route path="/hotels/:page/:perPage" component={Hotels} />
          <Route path="/login" component={Login} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/PlacesToVisit" component={placeDetail} />      
          <Route path="/hotel/compare" component={Compare} />      
          <Route path="/AddRoom" component={AddRoom} />  
          <Route path="/RoomsView" component={AllRooms} /> 
          <Route path="/SingleRoomView" component={RoomView} /> 
          <Route path="/RoomDetail" component={RoomDetail} /> 
          <Route path="/HotelView" component={HotelView} />       
          <Route path="/admin-dashboard" component={Dashboard} />
          <Route path="/user-dashboard" component={UserDashboard} />
          <Route path="/guide-dashboard" component={GuideDashboard} />
          <Route path="/HotelBooking/:id" component={HotelBooking} />
          <Route path="/book-tour" component={BookTour} />
          {/* <Route path="/sign-up" exact component={Signup} /> */}
          <Route path="/itinerary/:page/:perPage" component={Itinerary} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="not-found" />
        </Switch>
        {/* <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Product title="Audi"  price="900" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Suzuki" price="800" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Mehran" price="200" onAdToCart = {handlAddToCartClick} count={count}/> */}
      </div>
    </Router>
  );
}

export default App;
