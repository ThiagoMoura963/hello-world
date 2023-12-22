import styles from "./Home.module.css";
import post from "../../json/posts.json";
import PostCard from "../../components/PostCard";

const Home = () => {
    return (
        <ul className={styles.post}>
            {post.map(post =>
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>    
            )}
        </ul>
    )
}

export default Home;