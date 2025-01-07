import React from 'react';
import styles from './HeroSection.module.css'; // Import your CSS module

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      {/* <img src="src/assets/images/pink-img1.jpg" alt="Hero" className={styles.heroImage} /> */}
      <div className={styles.heroText}>
        <h1>Welcome to Our Site</h1>
        <p style={{position:'relative', textAlign:'center'}}>Your journey begins here</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
      


      
    </div>
    
  );
};

export default HeroSection;
