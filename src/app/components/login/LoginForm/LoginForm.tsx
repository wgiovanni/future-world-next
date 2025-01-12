"use client"
import { handleLogin } from "../../../../actions/index";
import styles from "./LoginForm.module.sass";

export const LoginForm = () => {

    const handleSubmit = async (event: {
        target: any;
        preventDefault: () => void;

    }) => {
        const formData = new FormData(event.target);
        event.preventDefault();
        await handleLogin(formData);
    }

    return (
        <div className={styles.NewAccountForm}  >
            <h1 className={styles.NewAccountForm__title}>New Account</h1>
            <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
                <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" name="submit" value="Login" />
            </form>
        </div>
    );
}