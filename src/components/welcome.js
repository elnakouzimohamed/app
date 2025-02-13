import styles from './welcome.module.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <div className={styles.background}>
                <div className={styles.backgroundText}>
                    <h1>Welcome to Our Website</h1>
                    <p>Discover our amazing services and products.</p>
                </div>
            </div>
        </section>
    );
};
export default Welcome;