import React from 'react';
import styles from './Button.module.css';
const Button = ({ text, onClick }) => {
    return (
<<<<<<< HEAD
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img
                className={styles.arrow}
                src="/images/arrow-forward.png"
                alt="arrow"
            />
=======
        <button onClick={ onClick} className={styles.button}>
                <span>{text}</span>
            <img className={styles.arrow}  src="/images/arrow-forward.png" alt="arrow" />
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
        </button>
    );
};
export default Button;
