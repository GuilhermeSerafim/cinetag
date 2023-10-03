import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Inicio/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;