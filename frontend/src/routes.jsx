import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import { UserProvider } from "./context/UserContext.jsx";

function AppRoutes() {       // função para gerenciamento de rotas
    return (
        <BrowserRouter>
            <UserProvider>
                <Header />
                <Container>
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                    </Routes>
                </Container>
                <Footer />
            </UserProvider>
        </BrowserRouter>
    )
}
export default AppRoutes;
