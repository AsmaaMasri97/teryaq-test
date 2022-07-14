import styles from "../styles/Header.module.css";
import Image from "next/image";
const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.corner__right__top__img}>
        <Image src="/corner-right.png" height={318} width={318} />
      </div>
      <div className={styles.corner__left__bottom__img}>
        <Image src="/corner-left.png" height={425} width={425} />
      </div>
      <div className={styles.navbar}>
        <div className={styles.right__side}>
          <ul className={styles.nav__right}>
            <li style={{ marginRight: "33px" }}>
              <a> Contact us</a>
            </li>
            <li>
              <a>Clients</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a> about company</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.header__paragraph__div}>
        We cover all essential services and facilities management, pest control
        landscaping, security general maintenance, cleaning,recruitment, and
        outsourcing.
      </div>
      <div className={styles.snapper__head}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
export default HeaderComponent;
