import React from 'react';
import style from './Circle_pro.module.css';
import user from '../../../../assets/images/user.svg';
import {motion} from 'framer-motion';
import {fadeIn,motionSettings} from '../../../../varients.js';
function Circle_pro() {
  return (
    <div className={style.Circle}>
    <div className={style.Properties}>
      <div 
      className= {`${style.pro_first}`}>
      <motion.div     {...motionSettings}  className={` ${style.newProperties} ${style.Properties_div} `} 
           style={{ backgroundColor: '#79C142' ,marginLeft: '4vw' }}>
           <p>Personalized attention is given to each profile.</p>
           <div><img src={user} alt="user1"/></div>
         </motion.div>

         <motion.div     {...motionSettings}  className={style.Properties_div}>
            <p>The database includes profiles from all over the world.</p>
            <div><img src={user} alt="user1"/></div>
         </motion.div>
         <motion.div     {...motionSettings}  className={style.Properties_div}>
            <p>Individualized assistance is offered throughout the process.</p>
            <div><img src={user} alt="user1"/></div>
         </motion.div>
         <motion.div     {...motionSettings}  className={style.Properties_div}
                    style={{ backgroundColor: 'var(--primary-color)' ,marginLeft: '4vw' }}>

            <p>One-time nominal registration fee is applicable.</p>
            <div><img src={user} alt="user1"/></div>
         </motion.div>
      </div>
      {/* <img src={pro_img} alt="pro_img" /> */}
      <motion.div 
       {...motionSettings} 
      className={style.img_container}> 
        <h1> matrimony </h1>
         </motion.div>
      <div className={style.pro_last}>
      <motion.div     {...motionSettings}  className={style.Properties_div}
      
      style={{ backgroundColor: 'var(--primary-color)' ,marginRight: '4vw' }}>

            <div><img src={user} alt="user1"/></div>
            <p>All profiles are verified and authentic.</p>   
         </motion.div>
         <motion.div     {...motionSettings}  className={style.Properties_div}>
             <div><img src={user} alt="user1"/></div>
            <p>High-quality database of eligible individuals of all ages..</p>   
         </motion.div>
         <motion.div     {...motionSettings}  className={style.Properties_div}>
             <div><img src={user} alt="user1"/></div>
            <p>Strict confidentiality of information is maintained.</p>   
         </motion.div>
         <motion.div     {...motionSettings}  className={style.Properties_div}
         style={{ backgroundColor: '#79C142' ,marginRight: '4vw' }}>
             <div><img src={user} alt="user1"/></div>
            <p>Pioneers in research on Maharashtrian wedding industry</p>   
         </motion.div>
         
      </div>
    </div>

    </div>
  )
}

export default Circle_pro
