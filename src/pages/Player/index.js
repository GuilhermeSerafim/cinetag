import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import videos from "json/db.json"
import { useParams } from 'react-router-dom';

function Player() {
    //Ele pega o parametro na url e bota na variavel
    const parametros = useParams();
    //Retornando valor
    const video = videos.find((video) => {
        return video.id === Number(parametros.id); //Conversão para numero
    })

    //Imprimindo objeto
    console.log(video);
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
        </>
    )
}

export default Player;