import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main/mainPage";
import HomePage from "./home/homePage";
import DestinationsPage from "./destinations/destinationsPage";
import ContactPage from "./contact/contactPage";
import AboutPage from "./about/aboutPage";
import AdministrationPage from "./administration/administrationPage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
