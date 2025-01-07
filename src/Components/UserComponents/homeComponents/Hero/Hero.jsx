import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Hero.module.css'; // Import the CSS module

function Hero() {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        <form className={styles.registrationForm}>
          <input type="text" placeholder="Your Full Name" className={styles.inputField} />
          <input type="text" placeholder="Your Mobile Number" className={styles.inputField} />
          <select className={styles.selectField}>
            <option value="">Profile for</option>
            <option value="self">Self</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="sibling">Sibling</option>
          </select>
          <Link to="/register">
            <Button 
              variant="primary" 
              className={`btn-hover ${styles.registerButton}`} 
              style={{ backgroundColor: 'var(--button)', padding: '10px 20px', boxShadow:'1px 1px 5px black' }}
            >
              Register
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Hero;
