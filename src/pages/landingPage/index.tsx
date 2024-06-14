// import logo from '@public/logo.svg';
import logo from '../../../public/logo.svg';
import line from '../../../public/curvedLine.svg';
import introImage from '../../../public/introImage.png';
import perksImage from '../../../public/perks.png';
import perk1 from '../../../public/perk1.svg';
import perk2 from '../../../public/perk2.svg';
import perk3 from '../../../public/perk3.svg';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import telegram from '../../../public/telegram.svg';

import styles from './landigPage.module.scss';

const LandingPage = () => (
  <div className={styles.page}>
    <div className="container">
      <header>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
        />
      </header>
      <div className={styles.intro}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Мы здесь, чтобы повысить вашу продуктивность</h1>
          <img
            className={styles.decorativeLine}
            src={line}
            alt="decorative line"
          />
          <div className={styles.buttons}>
            <button className={styles.signInBtn}>Войти</button>
            <button className={styles.signUpBtn}>Зарегистрироваться</button>
          </div>
        </div>
        <div className={styles.introImageBlock}>
          <img
            className={styles.introImage}
            src={introImage}
            alt="intro"
          />
        </div>
      </div>
      <div className={styles.perks}>
        <div className={styles.perksImage}>
          <img
            src={perksImage}
            alt="perks"
          />
        </div>
        <div className={styles.perksBlock}>
          <div className={styles.perk}>
            <div className={styles.perkImg}>
              <img
                src={perk1}
                alt="perk"
              />
            </div>
            <div className={styles.perkText}>
              <h3 className={styles.perkTitle}>Интуитивное управление</h3>
              <p className={styles.perkDescription}>
                С легкостью добавляйте, отслеживайте и завершайте задачи благодаря простому и понятному интерфейсу
              </p>
            </div>
          </div>
          <div className={styles.perk}>
            <div className={styles.perkImg}>
              <img
                src={perk2}
                alt="perk"
              />
            </div>
            <div className={styles.perkText}>
              <h3 className={styles.perkTitle}>Голосовой ввод</h3>
              <p className={styles.perkDescription}>
                С легкостью добавляйте, отслеживайте и завершайте задачи благодаря простому и понятному интерфейсу
              </p>
            </div>
          </div>
          <div className={styles.perk}>
            <div className={styles.perkImg}>
              <img
                src={perk3}
                alt="perk"
              />
            </div>
            <div className={styles.perkText}>
              <h3 className={styles.perkTitle}>Интуитивное управление</h3>
              <p className={styles.perkDescription}>
                С легкостью добавляйте, отслеживайте и завершайте задачи благодаря простому и понятному интерфейсу
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>На главную</p>
      <ul className={styles.footerMenu}>
        <li className={styles.menuItem}>
          <img
            src={facebook}
            alt="facebook"
          />
        </li>
        <li className={styles.menuItem}>
          <img
            src={instagram}
            alt="instagram"
          />
        </li>
        <li className={styles.menuItem}>
          <img
            src={telegram}
            alt="telegram"
          />
        </li>
      </ul>
    </footer>
  </div>
);

export default LandingPage;
