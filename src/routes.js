import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Inicio/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;