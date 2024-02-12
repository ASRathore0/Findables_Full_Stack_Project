import react from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {" "}
                <b>Wellcome!</b> Are you looking for your <em>lost stuff?</em>{" "}
                Dont't worry <b>Findables</b> are here!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus iure laudantium magni non eos quas expedita.
                        Minima iusto iste, itaque doloribus ex perspiciatis quas
                        officia nemo aspernatur, reiciendis repellendus magni?
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
