import react from 'react'
import styles from "./footer.module.css"
import Image from "next/image";
import Link from 'next/link';

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="lama blog" width={50} height={50} />
                 <h1 className={styles.logoText}>lamabloge</h1>
                 </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="facebook" width={18} height={18} />
                    <Image src="/instagram.png" alt="instagram" width={18} height={18} />
                    <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
                    <Image src="/youtube.png" alt="twitter" width={18} height={18} />
                </div>
            </div>
        <div className={styles.links}>
            <div className={styles.list}>
                <span className={styles.listTitle}>Links</span>
                <Link href="/">Homepage</Link>
                <Link href="/">Blog</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
            <div className={styles.list}>
                <span className={styles.listTitle}>Tags</span>
                <Link href="/">Style</Link>
                <Link href="/">Fashion</Link>
                <Link href="/">Coding</Link>
                <Link href="/">Travel</Link>
            </div>
            <div className={styles.list}>
                <span className={styles.listTitle}>Social</span>
                <Link href="/">Facebook</Link>
                <Link href="/">Instagram</Link>
                <Link href="/">Tiktok</Link>
                <Link href="/">Youtube</Link>
            </div>
        </div>
    </div>
    
 );
};
export default Footer;