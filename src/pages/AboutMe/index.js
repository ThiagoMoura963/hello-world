import ModelPost from "../../components/ModelPost";
import styles from "./AboutMe.module.css";
import aboutMePicture from "../../assets/about_me_picture.png";
import aboutMeCover from "../../assets/about_me_cover.png";

const AboutMe = () => {
    return (
        <ModelPost
          picture={aboutMeCover}
          title="Sobre mim"
        >
            <h3 className={styles.subtitle}>
                Olá, eu sou o Thiago Moura
            </h3>

            <img 
              src={aboutMePicture} 
              alt="Foto Thiago Moura" 
              className={styles.aboutMePicture}
            />

            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nemo quo, hic veritatis incidunt molestias perferendis atque quae nostrum dolores eos? Odit magnam nihil esse officiis suscipit cumque quas atque.</p>

        </ModelPost>
    )  
}

export default AboutMe;