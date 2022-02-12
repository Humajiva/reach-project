import React from "react";

export const Navbar = () => {
	return (
		<ul className="nav bg-secondary" style={{ width: "100%" }}>
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			</li>
		</ul>
	);
};
