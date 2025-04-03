import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span className={styles.bold}>
                    Meu pet sumiu
                </span>
            </p>
        </footer>
    )
}

export default Footer