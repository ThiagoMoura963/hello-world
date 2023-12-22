import styles from "./NotFound.module.css";
import Error404 from "../../assets/erro_404.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.container}>
                <span className={styles.container__error404}>404</span>
                <h1 className={styles.container__title}>Ops! Página não encontrada.</h1>

                <p className={styles.container__text}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.container__text}>Aguarde uns instandes e recarregue a página ou volte para a página inicial.</p>
                <div 
                  className={styles.container__buttonContainer}
                  onClick={() => navigate(-1)}
                >
                    <Button length="lg">
                        Voltar
                    </Button>
                </div>

                <img src={Error404} className={styles.container__picture} alt="Foto de um cachorro vestido como uma pessoa e de óculos" />

            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}

export default NotFound;