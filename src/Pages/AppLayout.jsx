// import AppNav from "../Components/AppNav";
import SideBar from "../Components/Sidebar";
import Map from "../Components/Map";
// import styles from "./AppLayout.module.css";
import styles from "./AppLayout.module.css";
import User from "../Components/User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
