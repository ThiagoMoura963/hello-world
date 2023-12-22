/* eslint-disable jsx-a11y/alt-text */
import MyPicture from "../../assets/my_picture.png";
import ColorCircle from "../../assets/color_circle.png";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__introduction}>
                <h1 className={styles.introduction__title}>
                    Olá, mundo!
                </h1>
                <p className={styles.introduction__text}>
                    Boas vindas ao meu espaço pessoal! E sou Thiago Moura, desenvolvedor Full-Stack. Aqui compartilho vários conhecimentos, espero que gostem
                </p>
            </div>
            <div className={styles.banner__image}>
                    <img 
                      src={ColorCircle} 
                      className={styles.image__colorCircle}
                      aria-hidden={true}
                    />
                    <img 
                      src={MyPicture} 
                      className={styles.image_myPicture} 
                      alt="Foto do Thiago Moura" 
                    />
            </div>
        </div>
    )
}

export default Banner;