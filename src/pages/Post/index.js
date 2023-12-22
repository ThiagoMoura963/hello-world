import "./Post.css";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import ModelPost from "../../components/ModelPost";
import ReactMarkdown from "react-markdown"
import NotFound from "../NotFound";
import DefaultPage from "../DefaultPage";
import PostCard from "../../components/PostCard";

const Post = () => {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    });

    if(!post) {
        return <NotFound />
    }

    const recomendedPosts = 
      posts.filter(post => post.id !== Number(params.id))
      .sort((a, b) => b.id - a.id)
      .slice(0, 4);

    return (      
        <DefaultPage>
            <ModelPost
            picture={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
            >
                <ReactMarkdown className="post-markdown-container">
                    {post.text}
                </ReactMarkdown>
            </ModelPost>

            <h2 className={styles.title}>
                Outros posts que você pode gostar: 
            </h2>

            <ul className={styles.recomendedPosts}>
                {recomendedPosts.map(post => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </DefaultPage>
    )
}

export default Post;