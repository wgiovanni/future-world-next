"use client"
import { useState } from "react"
import styles from './Dropdown.module.sass'
import { handleLogout } from "../../../actions";
import Link from "next/link";

export const Dropdown = ({ customer }: any) => {

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
        <div className={styles.Dropdown}>
            <button onClick={handleOpen} className={styles.Dropdown__user}>
                <p>Hola {customer.firstName}!</p>
            </button>
            {isOpen && (
                <div className={styles.Dropdown__dropdown}>
                    <Link href="/my-account" className={styles.Dropdown__dropdownLink}>My account</Link>
                    <button onClick={handleLogoutButton} className={styles.Dropdown__dropdownButton}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}