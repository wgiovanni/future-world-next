"use client"
import { useState } from "react"
import styles from './Logout.module.sass'
import { handleLogout } from "../../../actions";

export const Logout = ({ customer }: any) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        if (customer?.firstName) {
            setIsOpen(!isOpen)
        }
    };

    const handleLogoutButton = async () => {
        await handleLogout();
    }

    return (
        <div className={styles.Logout}>
            <button onClick={handleOpen} className={styles.Logout__user}>
                <p>Hola {customer.firstName}!</p>
            </button>
            {isOpen && (
                <div className={styles.Logout__dropdown}>
                    <button onClick={handleLogoutButton} className={styles.Logout__logoutButton}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}