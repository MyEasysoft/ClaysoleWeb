import React from 'react';
import css from './LandingPageMain.module.css';
import bag1 from '../../assets/bag1.jpg';
import bag2 from '../../assets/bag2.jpg';
import bag3 from '../../assets/bag3.jpg';
import bag4 from '../../assets/bag4.jpg';
import bag5 from '../../assets/bag4.jpg';
import bag6 from '../../assets/bag3.jpg';
import profileImg from '../../assets/bg.png';


function LandingPageMainComponent(){

  return (
    <>
       <div className={css.container +' '+ css.textCenter}>
		<div className={css.col12 +" "+ css.magB3}>
			<h4 className={css.magB2}>PRODUCTS</h4>
			<h1>We deal with the best</h1>
		</div>
		<div className={css.row}>
			
			<div className={css.col5 +" " + css.pad5}>
				
				<div className={css.row}>
					<div className={css.col4}>
						<figure>
							<img className={css.imgSize1} src={bag1}/>
						</figure>
					</div>
					<div className={css.col4}>
						<figure>
							<img className={css.imgSize1} src={bag2}/>
						</figure>
					</div>
					<div className={css.col4}>
						<figure>
							<img className={css.imgSize1} src={bag3}/>
						</figure>
					</div>
				</div>
				<div className={css.row}>
					<div className={css.col4}>
						<figure>
							<img className="img-size-1" src={bag4}/>
						</figure>
					</div>
					<div className={css.col4}>
						<figure>
							<img className="img-size-1" src={bag5}/>
						</figure>
					</div>
					<div className={css.col4}>
						<figure>
							<img className={css.imgSize1} src={bag6}/>
						</figure>
					</div>
				</div>


			</div>
			<div className={css.col5}>
				<p>
					When you are looking for the best marketplace where you can get everything you want with just few clicks.
					Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
				</p>
				<p>
					When you are looking for the best marketplace where you can get everything you want with just few clicks.
					Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
				</p>
				<p>
					When you are looking for the best marketplace where you can get everything you want with just few clicks.
					Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
				</p>
			</div>
			
		</div>
	</div>

	<div className={css.container +" "+ css.pad5 +" "+ css.sectionBg1}>
		<div className={css.container}>
			<div className={css.row +" "+ css.pad3}>
						
						<div className={css.col6}>
							<h4 className={css.textDanger}>ABOUT US</h4>
							<h1>Who We Are</h1>
							<p>
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
							</p>
							<p>
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
								When you are looking for the best marketplace where you can get everything you want with just few clicks.
							</p>
							
						</div>
						
						<div className={css.col5}>
							
							<div>
								<div className={css.badge1}>
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className={css.items}>
										<p>Timothy bought 1000pcs of clothes last week<br/>
										<span className={css.text1}>4 days ago</span></p>
									</div>
								</div>
							</div>
							<div>
								<div className={css.badge1}>
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className={css.items}>
										<p>Timothy bought 1000pcs of clothes last week<br/>
										<span className={css.text1}>4 days ago</span></p>
									</div>
								</div>
							</div>
							<div>
								<div className={css.badge1}>
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className={css.items}>
										<p>Timothy bought 1000pcs of clothes last week<br/>
										<span className={css.text1}>4 days ago</span></p>
									</div>
								</div>
							</div>
							<div>
								<div className={css.badge1}>
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className={css.items}>
										<p>Timothy bought 1000pcs of clothes last week<br/>
										<span className={css.text1}>4 days ago</span></p>
									</div>
								</div>
							</div>
							<div>
								<div className={css.badge1}>
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className={css.items}>
										<p>Timothy bought 1000pcs of clothes last week<br/>
										<span className={css.text1}>4 days ago</span></p>
									</div>
								</div>
							</div>
							
							
						</div>
					
						
					</div>
		</div>
		
		
	</div>

	<div className={css.container +" "+ css.textCenter}>
		<div className="text-center bold-text-1">
			<h4 className={css.magB2}>PRODUCTS</h4>
			<h1 className={css.magB2}>Merchandise</h1>
			<div className={css.col13}>
				<a className="btn btn-outline-primary" href="#">SHOP</a>
				<a className="btn btn-outline-primary" href="#">CREATE</a>
			</div>
			<p className="text-center container p-5">
				When you are looking for the best marketplace where you can get everything you want with just few clicks.
				Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
			</p>

		</div>
		<div className={css.row}>
			
			<div className={css.container}>
				
				<div className={css.sectionList}>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag1}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag2}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag3}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag4}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
				</div>

			

			</div>
			
			
		</div>

		<div className={css.row}>
			
			<div className={css.container}>
				
				<div className={css.sectionList}>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag1}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag2}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag3}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
					<div className={css.col3}>
							<img className={css.imgFluid +" "+ css.pad1 +" "+ css.shadowSm} src={bag4}/>
								<div className={css.badge2}>
									
										<img className={css.circleImg2} src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className={css.text2}>$100</p>
									
								</div>
					</div>
				</div>

			

			</div>
			
			
		</div>
	</div>
    </>
  );
};


export default LandingPageMainComponent;
