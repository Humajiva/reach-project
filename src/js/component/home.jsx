import React from "react";
//import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
//import { cards } from "./cards.js";
import { Cards } from "./cards.js";
//import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
//create your first component
export const Home = () => {
	return (
		<div className="m-0 p-0">
			<Navbar />
			<div className="row mx-5 text-center">
				<Jumbotron
					title="A Warm Welcome"
					discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit,ipsa,ipsam,eligendi,in quo sunt possimus non incident odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fuqiat numquam repellat"
					buttonURL="Click Here!"
					buttonLabel="http://google.com/"
				/>
			</div>
			<div className="row mx-5 d-flex justify-content-between">
				<Cards
					cardImage="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"
					cardTitle="Hello"
					cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit,ipsa,ipsam,eligendi."
					cardButton="Click Here"
				/>
				<Cards
					cardImage="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"
					cardTitle="Hello"
					cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit,ipsa,ipsam,eligendi."
					cardButton="Click Here"
				/>
				<Cards
					cardImage="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"
					cardTitle="Hello"
					cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit,ipsa,ipsam,eligendi."
					cardButton="Click Here"
				/>
				<Cards
					cardImage="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"
					cardTitle="Hello"
					cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit,ipsa,ipsam,eligendi."
					cardButton="Click Here"
				/>
			</div>
		</div>
	);
};
