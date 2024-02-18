"use client";

import React from "react";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                    ></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link>Login to write a comment </Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero repellendus officia cumque eaque inventore dolorum
                        unde iusto ut, tenetur architecto quis ducimus
                        accusamus? Tenetur, dolorum eius modi quae nostrum
                        laudantium.
                    </p>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero repellendus officia cumque eaque inventore dolorum
                        unde iusto ut, tenetur architecto quis ducimus
                        accusamus? Tenetur, dolorum eius modi quae nostrum
                        laudantium.
                    </p>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero repellendus officia cumque eaque inventore dolorum
                        unde iusto ut, tenetur architecto quis ducimus
                        accusamus? Tenetur, dolorum eius modi quae nostrum
                        laudantium.
                    </p>
                </div>
            </div>

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero repellendus officia cumque eaque inventore dolorum
                        unde iusto ut, tenetur architecto quis ducimus
                        accusamus? Tenetur, dolorum eius modi quae nostrum
                        laudantium.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
