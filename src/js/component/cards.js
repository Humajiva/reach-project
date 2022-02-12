import React from "react";
import PropTypes from "prop-types";

export const Cards = (props) => {
	return (
		<div className="cards" style={{ width: "18rem" }}>
			<img src={props.cardImage} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h1 className="card-title">{props.cardTitle}</h1>
				<p className="card-text">{props.cardText}</p>
				<a href="#" className="btn btn-primary">
					{props.cardButton}
				</a>
			</div>
		</div>
	);
};
Cards.propTypes = {
	cardImage: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string,
	cardButton: PropTypes.string,
};
