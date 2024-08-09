import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Buttons from "../../components/buttons/buttons"
import Activity from "../activity/activity"
// import Projects from "../projects/projects";
// import Contact from "../contact/contact";

import "./index.scss"

const RightSide = () => {
	const navigate = useNavigate()

	const [activeComponent, setActiveComponent] = useState<
		"activity" | "projects" | "contact" | null
	>(null)

	const buttonsActions = [
		{
			id: 1,
			color: "",
			text: "Activity",
			component: "activity" as const,
			path: "/home/activity",
		},
		{
			id: 2,
			color: "",
			text: "Projects",
			component: "projects" as const,
			path: "/home/projects",
		},
		{
			id: 3,
			color: "",
			text: "Contact",
			component: "contact" as const,
			path: "/home/contact",
		},
	]

	function renderMeasure() {
		return Array.from({ length: 90 }, (_, index) => (
			<div key={index} className="line" />
		))
	}

	const handleButtonClick = (
		component: "activity" | "projects" | "contact",
		path: string,
	) => {
		setActiveComponent(component)
		navigate(path)
	}

	const renderActiveComponent = () => {
		switch (activeComponent) {
			case "activity":
				return <Activity />
			//   case "projects":
			//     return <Projects />;
			//   case "contact":
			//     return <Contact />;
			default:
				return null
		}
	}

	return (
		<div className="rightPart">
			<div className="top">
				<div className="buttonContainer">
					{buttonsActions.map((button) => (
						<Buttons
							key={button.id}
							color={button.color}
							text={button.text}
							isActive={activeComponent === button.component}
							onClick={() =>
								handleButtonClick(button.component, button.path)
							}
						/>
					))}
				</div>
			</div>
			<div className="measureContainer">
				<div className="linesWrapper">{renderMeasure()}</div>
			</div>
			<div className="activeComponentContainer">
				{renderActiveComponent()}
			</div>
		</div>
	)
}

export default RightSide

