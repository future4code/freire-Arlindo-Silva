import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "../pages/AdminHomePage";
import ApplicationForm from "../pages/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage";
import Home from "../pages/HomePage";
import ListTrips from "../pages/ListTripsPage";
import Login from "../pages/LoginPage";
import TripDetails from "../pages/TripDetailsPage";

export default function Router() {
    return (
         <BrowserRouter>
            <Routes>
                <Route index element = {<Home />} />
                <Route path="admin-home" element = {<AdminHome/>} />
                <Route path="app-form" element = {<ApplicationForm/>} />
                <Route path="create-trip" element = {<CreateTrip/>} />
                <Route path="list-trips" element = {<ListTrips/>} />
                <Route path="login" element = {<Login/>} />
                <Route path="trip-details" element = {<TripDetails/>} />
            </Routes>
         </BrowserRouter>
    );
  }
  