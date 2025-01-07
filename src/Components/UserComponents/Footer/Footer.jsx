import React from 'react'
import style  from './Footer.module.css';

import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className={style.Footer}>
      <div className={style.heading_div}>
        <h1 className={style.heading}>matrimony</h1>
        <p>Lorem ipsum doler sit amet,cosecterur adipliscieng elit.quils elit tellus.</p>
      </div>
      <div>
        <h2>Weadding Services</h2>
        <Link to="/">Weading planer</Link>
        <Link to="/">Mackup and Touchup</Link>
        <Link to="/">Party  Planner</Link>
        <Link to="/">Photography Services</Link>
        <Link to="/">Mandap</Link>
      </div>
      <div>
        <h2>Quick Links</h2>
        <Link to="/about">About us</Link>
        <Link to="/">Member Loing</Link>
        <Link to="/">Sucess stories</Link>
        <Link to="/login">Register Now</Link>
        <Link to="/">Provices polices</Link>
        <Link to="/">Provices polices</Link>
        <Link to="/">Term and conditions</Link>
        <Link to="/about">Gallary</Link>
      </div>
      <div>
        <h2>Quick Links</h2>
        <Link to="/contact">Contact us</Link>
        <Link to="/login">Loing Help</Link>
        <Link to="/">Feedback</Link>
        <Link to="/">FAQS</Link>
        </div>
          <div>
            <h2>Social media</h2>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>  
          </div>   
    </div>
      <div className={style.foolast}>
           <div>
           <p>Matrimony77777@Gmail.com</p>
           <p>+910000736256</p>
           </div>
           <div >
           <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>  
           </div>

      </div>
    </>
  )
}

export default Footer



