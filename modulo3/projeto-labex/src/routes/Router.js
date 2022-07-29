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
                <Route path="/admin/trips/list" element = {<AdminHome/>} />
                <Route path="/trips/application" element = {<ApplicationForm/>} />
                <Route path="/admin/trips/create" element = {<CreateTrip/>} />
                <Route path="/trips/list" element = {<ListTrips/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/admin/trips/:id" element = {<TripDetails/>} />
            </Routes>
         </BrowserRouter>
    );
  }
  