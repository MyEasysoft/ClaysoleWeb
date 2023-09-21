import React from 'react';
import css from './LandingPageMain.module.css';
import bag1 from '../../assets/bag1.jpg';
import bag2 from '../../assets/bag2.jpg';
import bag3 from '../../assets/bag3.jpg';
import bag4 from '../../assets/bag4.jpg';
import bag5 from '../../assets/bag4.jpg';
import bag6 from '../../assets/bag3.jpg';
import profileImg from '../../assets/bg.png';
import classNames from 'classnames';


function SellerInstructionComponent(){

  return (
    <>
       <div className={classNames(css.container,css.textCenter,css.instructionBg,css.padT150) }>
          <div className={css.col12 +" "+ css.magB3}>
            <h3 className={classNames( css.magB2,css.textRed)}>How to become a Seller on Claysole</h3>
            <h1 className={css.textWhite}>Please follow the steps below to register as one of our sellers.</h1>
          </div>
          <div className={css.row}>
            
            
            <div className={classNames(css.col5,css.textLeft,css.textWhite)}>
              <ol>
                          <li>Firstly you need to create a normal user account on Claysole.</li>
                          <li>Then, login to your user dashboard with your email and password.</li>
                          <li>Click on the profile icon button on the top right corner and select "Become a Seller" from the dropdown menu</li>
                          <li>Supply the required information to verify your business information</li>
                      </ol>
            </div>
            
          </div>
        </div>

	

	
    </>
  );
};


export default SellerInstructionComponent;
