"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

// Pagination component representing pagination controls
const Pagination = ({ page, hasPrev, hasNext }) => {
    // Initializing useRouter hook to access Next.js router object
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Button for navigating to the previous page */}
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => router.push(`?page=${page - 1}`)}
            >
                Previous
            </button>
            {/* Button for navigating to the next page */}
            <button
                disabled={!hasNext}
                className={styles.button}
                onClick={() => router.push(`?page=${page + 1}`)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
