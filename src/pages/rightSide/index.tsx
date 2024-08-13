import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import Buttons from "../../components/buttons/buttons"
import Activity from "../activity/activity"
import Projects from "../projects/projects"
// import Contact from "../contact/contact";

import "./index.scss"
import { getGithubRepos } from "../../services/services"

const RightSide = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const [activeComponent, setActiveComponent] = useState<
		"activity" | "projects" | "contact" | null
	>(null)
	const [repos, setRepos] = useState(null)

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

	useEffect(() => {
		if (location.pathname === "/home/projects") {
			setActiveComponent("projects")

			getGithubRepos().then((repos) => {
				setRepos(repos)
				console.log(repos, "repos")
			})
		}

		if (location.pathname === "/home/activity") {
			setActiveComponent("activity")
		}

		if (location.pathname === "/home/contact") {
			setActiveComponent("contact")
		}
	}, [location])

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
			case "projects":
				return <Projects repos={repos} />
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

