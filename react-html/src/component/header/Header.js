import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.banner}>
          <h1>مجموعه جملات زیبا از بزرگان</h1>
          <h2>
            برای اجتناب از بحران می توانید از سیاست سکوت استفاده کنید:سوزان
            کوئیلیام
          </h2>
          <a className={styles.btn} href="../products/Products">محصولات</a>
        </div>
      </header>
      <div className={styles.contentDivider}></div>
    </div>
  );
};

export default Header;
