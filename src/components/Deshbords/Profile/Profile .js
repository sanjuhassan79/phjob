import React, { useEffect, useState } from 'react';
import useAuth from '../../Firebase/useAuth';

import './Profile .css'
const Profile  = () => {
	const {user} = useAuth();
	const emaul=user.email;
const [items,setitem]=useState({})

// const [product,setProduct]=useState([])
    
useEffect(() => {
    fetch(`http://localhost:5000/users/${emaul}`)
    .then(res=>res.json())
    .then(data=>setitem(data))
 }, [emaul]);

const item=items[0]

    
    
    // useEffect(() => {
    //     fetch()
    //     .then(res=>res.json())
    //     .then(data=>setitem(data))
    // }, [emaul]);

    console.log(item);
    // const item=Item[0]
	// console.log(item.name);
//  const [costomer]=costomers
//   console.log(costomer.profile);
    return (
        <div>
       	     <div className="container">
	<div className="innerwrap">
		<section className="section1 clearfix">
			<div>
				<div className="row grid clearfix">
					<div className="col2 first">
						<img src={item?.profile} alt=""/>
						<h1>{item?.name}</h1>
						
					</div>
					<div className="col2 last">
						<div className="grid clearfix">
							<div className="col3 first">
								<h1>{item?.model}</h1>
								<span>Car Model</span>
							</div>
							<div className="col3"><h1>{item?.palate}</h1>
							<span>Car Palate</span></div>
							<div className="col3 last"><h1>{item?.Vehicle}</h1>
							<span>Vehicle Type</span></div>
						</div>
					</div>
				</div>
				<div className="row clearfix">
					<ul className="row2tab clearfix">
						<li><i className="fa fa-list-alt"></i> {item?.phone} </li>
						<li><i className="fa fa-heart"></i> {item?.address} </li>
						<li><i className="fa fa-check"></i> {item?.age} </li>
						<li><i className="fa fa-thumbs-o-up "></i> {item?.area} </li>
					</ul>
				</div>
			</div>
			<span className="smalltri">
				
			<i className="fa fa-star"></i>
			</span>
		</section>
		<section className="section2 clearfix">
			<div className="grid">
				<div className="col3 first">
					<div className="postcont"><img src={item?.licence} alt=""/>
					</div>
					<div className="profileinfo">
						<img src={item?.profile} alt=""/>
						
						<span>Read more <i className="fa fa-angle-right"></i></span>
					</div>
				</div>
			
				<div className="col3 center">
					<div className="postcont"><img src={item?.nid} alt=""/>
					</div>
					<div className="profileinfo">
						<img src={item?.profile} alt=""/>
						
						<span>Read more <i className="fa fa-angle-right"></i></span>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
        </div>
    );
};

export default Profile ;