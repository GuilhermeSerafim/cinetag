import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifacio' capa='https://queirosiana.files.wordpress.com/2021/02/banho-em-gato-angora-valores-1.jpg' />
            </section>
        </>
    )
}

export default Favoritos;