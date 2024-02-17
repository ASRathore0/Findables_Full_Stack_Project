import Menu from '@/componenets/menu/Menu';
import styles from "./singlePage.module.css"
import Image  from "next/image";

const SinglePage = () => {
    return (
        <div className={styles.contanier}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                         </div>
                        <div className={styles.userTextContainer}>
                           <span className={styles.userName}>John Doe</span>
                           <span className={styles.date}>18.02.2024</span>
                        </div>
                     </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}></div>
                <Menu />
            </div>
        </div>        

  )
    }
    
    export default SinglePage