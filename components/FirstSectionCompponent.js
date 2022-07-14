import styles from "../styles/FirstSection.module.css";
import Image from "next/image";
const FirstSectionComponent = () => {
  return (
    <div className={styles.first__container}>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <Image src="/section-one-right.png" height={425} width={590} />
      </div>
      <div className={styles.first__container__first__img}>
        <Image src="/black-rectangle.png" height={425} width={700} />
      </div>
      <div className={styles.first__container__second__img}>
        <img src="/pic.png" />
      </div>
      <div className={styles.first__container__title}>
        <div className={styles.first__container__third__img}>
          <img src="/corner-title.png" />
        </div>
        <span className={styles.first__title__span}>About Company</span>
        <p className={styles.first__content__p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna
          <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          <br />
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
          <br />
          cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit <br />
          amet, consectetur adipiscing elit, sed do eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad <br />
          minim veniam, quis nostrud exercitation ullamco laboris
          <br /> nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
          dolor in reprehenderit in voluptate velit esse.
        </p>
      </div>
    </div>
  );
};
export default FirstSectionComponent;
