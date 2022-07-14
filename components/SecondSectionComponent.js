import Image from "next/image";
import styles from "../styles/SecondSection.module.css";
const SecondSectionComponent = () => {
  return (
    <div className={styles.second__container}>
      <span className={styles.second__title__span}>Our Services</span>
      <div className={styles.second__container__services}>
        <button className={styles.second__container__services__left}>
          Specialized services
        </button>
        <button className={styles.second__container__services__right}>
          Support services
        </button>
      </div>
      <p className={styles.second__p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
        <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div
        style={{ marginLeft: "77px", display: "flex", flexDirection: "row" }}
      >
        <div className={styles.second__container__first__icon__container}>
          <img src="/icon1.png" />
          <p className={styles.second__container__first__icon__p}>
            Male/Female <br />
            Cleaning Service
          </p>
        </div>
        <div className={styles.second__container__last__icon__container}>
          <img src="/icon2.png" />
          <p className={styles.second__container__last__icon__p}>
            Sorting & Packing <br /> Worker Service
          </p>
        </div>
        <div className={styles.second__container__last__icon__container}>
          <img src="/icon3.png" />
          <p className={styles.second__container__last__icon__p}>
            Agriculture and <br /> Irigation Network <br />
            Technicien Service
          </p>
        </div>
        <div className={styles.second__container__last__icon__container}>
          <img src="/icon4.png" />
          <p className={styles.second__container__last__icon__p}>
            Hospitality <br />
            Worker Service
          </p>
        </div>
        <div className={styles.second__container__last__icon__container}>
          <img src="/icon5.png" />
          <p className={styles.second__container__last__icon__p}>
            Electrical
            <br /> Technician <br />
            Service
          </p>
        </div>
        <div className={styles.second__container__last__icon__container}>
          <img src="/icon6.png" />
          <p className={styles.second__container__last__icon__p}>
            Vehicle <br />
            Drivere
          </p>
        </div>
      </div>
      <div className={styles.snapper}>
        <span />
        <span />
      </div>
    </div>
  );
};
export default SecondSectionComponent;
