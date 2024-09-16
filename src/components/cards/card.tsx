import {
	truncate,
	capitalizeFirstLetter,
	transformAndSortLanguages,
} from "../../utils/utils"
import type { CardProps } from "./types"

import LoadingText from "../animations/loader/loaderText"
import BorderAnim from "../animations/border/borderAnim"

// import Profil from "../../assets/img/profil-pic.png"
import Profil from "../../assets/img/profil.png"
import React from "../../assets/icons/react.svg?react"
import Node from "../../assets/icons/node.svg?react"
import Sass from "../../assets/icons/sass.svg?react"
import Css from "../../assets/icons/css.svg?react"
import Js from "../../assets/icons/js.svg?react"
import Ts from "../../assets/icons/typescript.svg?react"
import Fork from "../../assets/icons/fork.svg?react"
import DefaultLogo from "../../assets/icons/logo.svg?react"
import Apple from "../../assets/icons/apple.svg?react"
import LockSelf from "../../assets/projects/icons/lockself.svg?react"

import Archi from "../../assets/icons/activity/archi.svg?react"
import Merge from "../../assets/icons/activity/merge.svg?react"
import Other1 from "../../assets/icons/activity/other-1.svg?react"
import Polygon from "../../assets/icons/activity/polygon.svg?react"
import Stars from "../../assets/icons/activity/stars.svg?react"
import Triangle from "../../assets/icons/activity/triangle-down.svg?react"

import "./card.scss"

const Card = ({ data, loading, updatedProjects, target }: CardProps) => {
	const project = updatedProjects.find(
		(project: any) => project.id === data?.id,
	)
	const checkString =
		typeof project?.logo === "string" && project.logo.endsWith(".png")
	const transformedLanguages = transformAndSortLanguages(
		data?.languages || {},
	)
	const languageKeys = Object.keys(transformedLanguages)
	const shouldDisplayLanguages = languageKeys.length > 0

	const handleRedirectLinkRepo = () => {
		if (!data || target === "activity") return
		window.open(data?.html_url, "_blank")
	}

	return (
		<div
			className={`cardContainer ${loading ? "loading" : ""} ${target}`}
			onClick={!loading ? handleRedirectLinkRepo : undefined}
		>
			{loading && target === "projects" ? (
				<div className="containerLoader">
					<LoadingText
						type={["small", "medium", "long"]}
						number={3}
					/>
				</div>
			) : target === "projects" ? (
				<div className="card-body-projects">
					<div className="top-card">
						<div
							className={`card-logo ${checkString ? "" : "emptyBg"}`}
						>
							{checkString ? (
								<img
									src={project.logo ?? ""}
									alt="Project logo"
								/>
							) : project?.logo === "" ? (
								<DefaultLogo className="defaultLogo" />
							) : project?.logo === "apple.svg" ? (
								<Apple className="logo apple" />
							) : project?.logo === "lockself.svg" ? (
								<LockSelf className="logo LS" />
							) : project?.logo === "other1" ? (
								<Archi className="archiLogo" />
							) : project?.logo === "other2" ? (
								<Merge className="defaultLogo" />
							) : project?.logo === "other3" ? (
								<Other1 className="otherLogo" />
							) : project?.logo === "other4" ? (
								<Polygon className="polygonLogo" />
							) : project?.logo === "other5" ? (
								<Stars className="starsLogo" />
							) : project?.logo === "other6" ? (
								<Triangle className="triangleDownLogo" />
							) : project?.logo === "other7" ? (
								<Other1 className="otherLogo" />
							) : null}
						</div>
						<div className="topCardContainer">
							<div className="card-title">
								{capitalizeFirstLetter(
									truncate(data ? data.name : "", 11),
								)}
							</div>
							<div className="icon">
								<Fork />
								<div className="fork-count">
									{data ? data.forks_count : 0}
								</div>
							</div>
							{shouldDisplayLanguages && (
								<div className="language-container">
									#{languageKeys.join(" #")}
								</div>
							)}
						</div>
					</div>
					<p className="card-text">{project?.description}</p>
				</div>
			) : (
				<div className="card-body-activity">
					<BorderAnim />
					<img src={Profil} alt="Profil" />
					<div className="icons">
						<React className="icon-react" />
						<Node className="icon-node" />
						<Sass className="icon-sass" />
						<Css className="icon-css" />
						<Js className="icon-js" />
						<Ts className="icon-ts" />
					</div>
				</div>
			)}
		</div>
	)
}

export default Card

