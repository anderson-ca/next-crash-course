import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div classMame={styles.container}>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
