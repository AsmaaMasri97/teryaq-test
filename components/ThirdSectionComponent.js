import Image from "next/image";
import styles from "../styles/ThirdSection.module.css";
const ThirdSectionComponent = () => {
  return (
    <div className={styles.third__container}>
      <div className={styles.first__container__title}>
        <div className={styles.corner__title__img}>
          <img src="/corner-title.png" />
        </div>
        <span className={styles.first__title__span}>Message Us</span>
        <div className={styles.third__container__filelds}>
          <input
            className={styles.third__container__input}
            placeholder="Enter Name"
          />
          <input
            className={styles.third__container__input}
            placeholder="Enter Company"
          />
          <div className={styles.third__container__text__area}>
            <input
              className={styles.third__container__text__area__input}
              placeholder="Enter Your Message"
            />
            <button className={styles.submit__button}>SUBMIT</button>
          </div>
        </div>

        <div className={styles.second__row}>
          <input
            className={styles.third__container__input}
            placeholder="Enter Email"
          />
          <input
            className={styles.third__container__input}
            placeholder="Enter Text"
          />
        </div>
      </div>
    </div>
  );
};
export default ThirdSectionComponent;
