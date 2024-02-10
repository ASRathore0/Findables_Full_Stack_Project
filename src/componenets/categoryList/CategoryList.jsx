import react from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Catagories</h1>
            <div className={styles.catagories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png" alt="style" height={32} width={32} className={styles.image}/>
                    Style
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.phone}`}>
                    <Image src="/fashion.png" alt="style" height={32} width={32} className={styles.image}/>
                    Phone
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.key}`}>
                    <Image src="/food.png" alt="style" height={32} width={32} className={styles.image}/>
                    Key
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.documents}`}>
                    <Image src="/culture.png" alt="style" height={32} width={32} className={styles.image}/>
                    Documents
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.charger}`}>
                    <Image src="/travel.png" alt="style" height={32} width={32} className={styles.image}/>
                    Charger
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.earphone}`}>
                    <Image src="/coding.png" alt="style" height={32} width={32} className={styles.image}/>
                    Earphone
                </Link>
            </div>
        </div>
    )
}

export default CategoryList