import Menu from "@/componenets/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/componenets/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.contanier}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/p1.jpeg"
                                alt=""
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>18.02.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Magni aut nemo corrupti impedit perferendis
                            eum. Adipisci totam ea excepturi voluptates, eveniet
                            iusto maxime ullam atque architecto ducimus numquam
                            tempora voluptas.
                        </p>
                        <h2>Lorem ipsum dolor sit amet.</h2>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Magni aut nemo corrupti impedit perferendis
                            eum. Adipisci totam ea excepturi voluptates, eveniet
                            iusto maxime ullam atque architecto ducimus numquam
                            tempora voluptas.
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Magni aut nemo corrupti impedit perferendis
                            eum. Adipisci totam ea excepturi voluptates, eveniet
                            iusto maxime ullam atque architecto ducimus numquam
                            tempora voluptas.
                        </p>
                    </div>
                    <div>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
