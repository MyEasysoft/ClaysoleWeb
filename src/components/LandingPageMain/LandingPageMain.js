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
       <div className="container p-5">
		<div className="text-center bold-text-1">
			<h4 className='text-danger'>ABOUT US</h4>
			<h1>Who We Are</h1>
		</div>
		<div className="row mt-5 p-3">
			
			<div className="col-6">
				
				<div className="row">
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag1}/>
						</figure>
					</div>
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag2}/>
						</figure>
					</div>
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag3}/>
						</figure>
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag4}/>
						</figure>
					</div>
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag5}/>
						</figure>
					</div>
					<div className="col-4">
						<figure>
							<img className="img-size-1" src={bag6}/>
						</figure>
					</div>
				</div>


			</div>
			<div className="col-6 d-flex justify-content-evenly">
				<p>
					When you are looking for the best marketplace where you can get everything you want with just few clicks.
					Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
				</p>
			</div>
			
		</div>
	</div>

	<div className="container-fluid p-5 section-bg-1">
		<div className="container">
			<div className="row mt-5 p-3">
						<h4 className='text-danger'>ABOUT US</h4>
						<h1>Who We Are</h1>
						<div className="col-6 d-flex flex-column justify-content-evenly">
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
						
						<div className="col-6 ps-5">
							
							<div className="row py-1">
								<div className="col-4 d-flex flex-direction-row col-12 p-3 pb-2 img-badges">
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className="d-flex line-height-1 font-size-1 flex-column col-10 px-3">
										<p>Timothy bought 1000pcs of clothes last week<br/>
										4 days ago</p>
									</div>
								</div>
							</div>
							<div className="row py-1">
								<div className="col-4 d-flex flex-direction-row col-12 p-3 pb-2 img-badges">
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className="d-flex line-height-1 font-size-1 flex-column col-10 px-3">
										<p>Timothy bought 1000pcs of clothes last week<br/>
										4 days ago</p>
									</div>
								</div>
							</div>
							<div className="row py-1">
								<div className="col-4 d-flex flex-direction-row col-12 p-3 pb-2 img-badges">
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className="d-flex line-height-1 font-size-1 flex-column col-10 px-3">
										<p>Timothy bought 1000pcs of clothes last week<br/>
										4 days ago</p>
									</div>
								</div>
							</div>
							<div className="row py-1">
								<div className="col-4 d-flex flex-direction-row col-12 p-3 pb-2 img-badges">
									<img className="img-size-1 circle-img-1" src={profileImg}/>
									
									<div className="d-flex line-height-1 font-size-1 flex-column col-10 px-3">
										<p>Timothy bought 1000pcs of clothes last week<br/>
										4 days ago</p>
									</div>
								</div>
							</div>
						</div>
					
						
					</div>
		</div>
		
		
	</div>

	<div className="container p-5">
		<div className="text-center bold-text-1">
			<h4 className="text-danger my-5">PRODUCTS</h4>
			<h1>Merchandise</h1>
			<div className="col-2 d-flex flex-row container justify-content-evenly mt-4 btn btn-outline-primary">
				<a className="btn btn-outline-primary" href="#">SHOP</a>
				<a className="btn btn-outline-primary" href="#">CREATE</a>
			</div>
			<p className="text-center container p-5">
				When you are looking for the best marketplace where you can get everything you want with just few clicks.
				Then we are at your service.When you are looking for the best marketplace where you can get everything you want with just few clicks.
					
			</p>

		</div>
		<div className="row mt-5 p-3">
			
			<div className="container">
				
				<div className="row">
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag1}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag2}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag3}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag4}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
				</div>

				<div className="row">
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag1}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag2}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag3}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
								</div>
					</div>
					<div className="col-3">
							<img className="img-fluid shadow-sm" src={bag4}/>
								<div className="row line-height-1 font-size-1 py-1">
									<div className="col-4 d-flex flex-direction-row col-12 py-2 justify-content-around">
										<img className="img-size-2 circle-img-2 mt-2" src={profileImg}/>
										<div>
											<p className="figure-text-1 line-height-2 font-size-2 p-0"><span className="fw-bold">Mark Mathews</span><br/>4 days ago</p>
										</div>
										<p className="text-danger mt-3 fs-4 fw-bold">$100</p>
									</div>
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
