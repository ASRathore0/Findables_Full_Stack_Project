import CardList from "@/componenets/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/componenets/menu/Menu";

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>/Style Blog</h1>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    );
}

export default BlogPage