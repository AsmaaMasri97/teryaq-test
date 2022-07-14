import FirstSectionComponent from "../components/FirstSectionCompponent";
import FourthSectionComponent from "../components/FourthSectionComponent";
import HeaderComponent from "../components/HeaderComponent";
import SecondSectionComponent from "../components/SecondSectionComponent";
import ThirdSectionComponent from "../components/ThirdSectionComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.parent}>
      <HeaderComponent />
      <FirstSectionComponent />
      <SecondSectionComponent />
      <ThirdSectionComponent />
      <FourthSectionComponent />
    </div>
  );
}
