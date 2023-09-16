import React, { useEffect } from 'react'
import styles from './home.module.css'

export default function Home() {
    useEffect(() => {
        console.log("asd");
    }, [])
    return (
        <>
            <div className={`${styles.content}`}>
                <div className={`${styles.layer}`}>
                    <h1 className=' text-white'>Basic Banking System</h1>

                </div>
            </div >
        </>
    )
}
