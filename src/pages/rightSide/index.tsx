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

	function renderMeasure() {
		return Array.from({ length: 90 }, (_, index) => (
			<div key={index} className="line" />
		))
	}

	return (
		<div className="rightPart">
			<div className="top">
				<div className="buttonContainer">
					{buttonsActions.map((button, index) => (
						<Buttons key={index} {...button} />
					))}
				</div>
			</div>
			<div className="measureContainer">
				<div className="linesWrapper">{renderMeasure()}</div>
			</div>
		</div>
	)
}

export default RightSide

