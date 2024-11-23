
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
export default function Parallex() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column y={y} />
        <Column y={y2} />
        <Column y={y3} />
        <Column y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}



const Column = ({ y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      <div className={styles.gridItem}>
        <p className={styles.text}>
          With our assistance, over 5,000 clients have successfully achieved their dream of studying or working abroad.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Nandhini</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
          Thanks to VJC Overseas, I secured my student visa within weeks. The process was seamless, and their guidance was invaluable.
        </p>
        <div className={styles.stars}>★★★★☆</div> {/* Add star ratings */}
        <p className={styles.name}>- Abbas ahmed</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
          From consultation to visa approval, VJC Overseas made my family&apos;s immigration journey stress-free. Highly recommended.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Sridhar</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
          Our team has helped over 3,000 professionals relocate globally with the right work permits and immigration support.
        </p>
        <div className={styles.stars}>★★★★☆</div> {/* Add star ratings */}
        <p className={styles.name}>- Varshini</p>
      </div>
    </motion.div>
  );
};


