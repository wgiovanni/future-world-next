"use client"
import { useEffect } from "react";
import styles from './error.module.sass'

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error)
    }, [])

    return (
        <div className={styles.error}>
            <p>
                <strong>:'(</strong> Opps! Something went wrong <button onClick={reset}>Retry</button>
            </p>
        </div>
    )
}
