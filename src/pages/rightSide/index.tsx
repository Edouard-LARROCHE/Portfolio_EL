import React from "react"

import Buttons from "../../components/buttons/buttons"

import "./index.scss"

const RightSide = () => {
	const buttonsActions = [
		{
			color: "",
			text: "Activity",
		},
		{
			color: "",
			text: "Projects",
		},
		{
			color: "",
			text: "Contact",
		},
	]

	return (
		<div className="rightPart">
			<div className="top">
				<div className="buttonContainer">
					{buttonsActions.map((button, index) => (
						<Buttons key={index} {...button} />
					))}
				</div>
			</div>
		</div>
	)
}

export default RightSide

