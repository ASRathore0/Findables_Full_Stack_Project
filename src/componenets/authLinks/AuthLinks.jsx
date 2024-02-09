import react from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';


const AuthLinks = () => {
//for now this is temp. 
    const status="notauthenticated";
    return (
        <>
            {status==="notauthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
              <>
                  <Link href="/write">Write</Link>
                  <span className={styles.link}>Logout</span>
              </>
            )}
        </>
    );
};
export default AuthLinks