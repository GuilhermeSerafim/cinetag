import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes</h1>
            </Titulo>
            <Card id='1' titulo='Gato' capa='https://conteudo.imguol.com.br/c/entretenimento/0a/2023/06/29/gato-do-deserto-1688070337093_v2_3x4.jpg'/>
            <Rodape />
        </>
    )
}

export default Inicio;