import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/> {/* Aqui vem todas as rotas filhas que vão ser encaixas na rota PAI (PaginaBase)*/}
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase;