import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import {Outlet} from 'react-router-dom';
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      {/* <p>List of Cities</p> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} WorldWise Inc. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
export default Sidebar;
