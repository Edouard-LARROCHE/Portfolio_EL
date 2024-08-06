import React from "react"

import Arrow from "../../assets/icons/arrow.svg?react"

import "./navBar.scss"

const NavBar = () => {
	return (
		<div className="containerNavBar">
			<div className="navBar">
				<div className="containerButton">
					<div className="text">Why me?</div>
					<div className="icon">
						<Arrow />
					</div>
				</div>
				<div className="containerButton">
					<div className="text">Projects</div>
					<div className="icon">
						<Arrow />
					</div>
				</div>
				<div className="containerButton">
					<div className="text">Shared with me</div>
					<div className="icon">
						<Arrow />
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar

