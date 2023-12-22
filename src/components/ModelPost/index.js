import styles from "./ModelPost.module.css";

const ModelPost = ({ picture, title, children }) => {
    return (
        <article className={styles.container}>
            <div 
              className={styles.container__picture}
              style={{ backgroundImage: `url(${picture})` }}
            ></div>

            <h2 className={styles.container__title}>
                {title}
            </h2>
            <div className={styles.container__content}>
                {children}
            </div>
        </article>
    )
}

export default ModelPost;