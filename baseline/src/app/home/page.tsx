import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <p>
            Home
          </p>
          
        </div>
        <div className={styles.section}>
          <h1>
            Today
          </h1>
          <div className={styles.subsection1}>
            <div className={styles.subsection2}>
              <h1>
                Step Count
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Running
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Cycling
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Swimming
              </h1>
            </div>
          </div>

        </div>


        <div className={styles.section}>
          <h1>
            Trends
          </h1>
          <div className={styles.subsection1}>
            <div className={styles.subsection2}>
              <h1>
                Step Count
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Running
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Cycling
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Swimming
              </h1>
            </div>
          </div>
        </div>
                <div className={styles.section}>
          <h1>
            Changes
          </h1>
          <div className={styles.subsection1}>
            <div className={styles.subsection2}>
              <h1>
                Step Count
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Running
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Cycling
              </h1>
            </div>
            <div className={styles.subsection2}>
              <h1>
                Swimming
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
