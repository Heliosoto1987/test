import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BooksScreen } from "../screens/BooksScreen";
//Screens
import { LadingScreen } from "../screens/LadingScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingScreen />} />
        <Route path="/book" element={<BooksScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
