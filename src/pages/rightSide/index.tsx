import { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { useScreenSize } from "../../context/hooks/screenSizeHooks"
import { useTheme } from "../../context/hooks/themeHooks"

import { getGithubReposWithLanguages } from "../../services/services"

import Buttons from "../../components/buttons/buttons"
import Activity from "../activity/activity"
import Projects from "../projects/projects"
import ReviewData from "../../data/ReviewsData"
import Contact from "../contact/contact"

import type { ReposProps } from "../../types/types"

import "./index.scss"

const RightSide = () => {
	const { t } = useTranslation()
	const { theme } = useTheme()
	const screenSize = useScreenSize()
	const navigate = useNavigate()
	const location = useLocation()

	const [activeComponent, setActiveComponent] = useState<
		"activity" | "projects" | "reviews" | "contact" | null
	>(null)
	const [repos, setRepos] = useState<ReposProps>([])
	const [loading, setLoading] = useState(true)

	const scrollableRef = useRef<HTMLDivElement>(null)

	const buttonsActions = [
		{
			id: 1,
			color: "",
			text: t("rightSide.button.activity"),
			component: "activity" as const,
			path: "/home/activity",
		},
		{
			id: 2,
			color: "",
			text: t("rightSide.button.projects"),
			component: "projects" as const,
			path: "/home/projects",
		},
		{
			id: 3,
			color: "",
			text: t("rightSide.button.reviews"),
			component: "reviews" as const,
			path: "/home/reviews",
		},
		{
			id: 4,
			color: "",
			text: t("rightSide.button.contact"),
			component: "contact" as const,
			path: "/home/contact",
		},
	]

	useEffect(() => {
		if (
			location.pathname === "/home/projects" ||
			location.pathname === "/home/activity"
		) {
			if (screenSize === "mobile") {
				setActiveComponent("activity")
			} else {
				setActiveComponent("projects")
			}

			getGithubReposWithLanguages().then((repos: ReposProps) => {
				setRepos(repos)
				setLoading(false)
			})
		}

		if (screenSize === "mobile") {
			if (location.pathname === "/home/projects") {
				setActiveComponent("projects")
			}
		} else {
			if (location.pathname === "/home/activity") {
				setActiveComponent("activity")
			}
		}

		if (location.pathname === "/home/reviews") {
			setActiveComponent("reviews")
		}

		if (location.pathname === "/home/contact") {
			setActiveComponent("contact")
		}
	}, [location])

	function renderMeasure() {
		return Array.from({ length: 1605 }, (_, index) => (
			<div key={index} className="line" />
		))
	}

	const handleButtonClick = (
		component: "activity" | "projects" | "reviews" | "contact",
		path: string,
	) => {
		setActiveComponent(component)
		navigate(path)
	}

	const renderActiveComponent = () => {
		switch (activeComponent) {
			case "activity":
				return <Activity scrollableRef={scrollableRef} />
			case "projects":
				return (
					<Projects
						repos={repos}
						loading={loading}
						scrollableRef={scrollableRef}
					/>
				)
			case "reviews":
				return <ReviewData />
			case "contact":
				return <Contact />
			default:
				return null
		}
	}

	return (
		<div className={`rightPart ${theme}`} ref={scrollableRef}>
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

