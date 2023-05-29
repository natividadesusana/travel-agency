import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import FlightsDetailPage from "./pages/FlightsDetailPage";
import HotelListPage from "./pages/HotelListPage";
import HotelDetailPage from "./pages/HotelDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights/:cityId" element={<FlightsPage />} />
        <Route path="/flights/:flightsId/details" element={<FlightsDetailPage />} />
        <Route path="/hotels" element={<HotelListPage />} />
        <Route path="/hotels/:hotelsId/details" element={<HotelDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
