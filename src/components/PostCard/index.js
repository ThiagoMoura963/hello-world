import Button from "../Button";
import styles from "./Post.module.css";
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
            <img 
              src={`../../assets/posts/${post.id}/capa.png`} 
              alt="Foto de capa"
              className={styles.post__image}
            />
            <h2 className={styles.post__title}>{post.title}</h2>
            
            <Link
              to={`/posts/${post.id}`}
            >
                <Button>
                    Ler mais    
                </Button>            
            </Link>
        </div>
    )
}

export default PostCard;