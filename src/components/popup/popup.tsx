import { useNavigate } from "react-router-dom"

import type { PopupProps } from "./types"

import Techno from "../../assets/icons/techno.svg?react"
import Cyber from "../../assets/icons/cyber-secu.svg?react"
import Leader from "../../assets/icons/leader.svg?react"
import Archi from "../../assets/icons/archiWeb.svg?react"
import Activity from "../../assets/icons/activity.svg?react"
import Rocket from "../../assets/icons/rocket.svg?react"

import "./popup.scss"

const Popup = ({
	target,
	size,
	stopPropagation,
	onMouseEnter,
	onMouseLeave,
}: PopupProps) => {
	const navigate = useNavigate()

	const handleRedirect = (path: string) => {
		navigate(path)
	}

	return (
		<div
			className={`containerPopup ${size}`}
			onClick={stopPropagation}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{target === "withMe" && (
				<div className="popupContainerContent">
					<div className="contentLeft">
						<div className="title">Use cases</div>
						<ul>
							<li>
								<div className="iconUseCase">
									<Techno />
								</div>
								<div className="containerText">
									<div className="textUp">
										Tech Enthusiast
									</div>
									<div className="textDown">
										Expert in modern development and
										innovative solutions.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Cyber />
								</div>
								<div className="containerText">
									<div className="textUp">Security First</div>
									<div className="textDown">
										Protecting systems and sensitive data
										with precision.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Leader />
								</div>
								<div className="containerText">
									<div className="textUp">
										Committed Leader
									</div>
									<div className="textDown">
										Guiding teams to achieve collective
										excellence.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Archi />
								</div>
								<div className="containerText">
									<div className="textUp">Web Architect</div>
									<div className="textDown">
										Designing robust and scalable web
										architectures.
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="contentRight">
						<div className="title">User storie</div>
						<div className="text">
							<p>
								As a passionate Front-End Developer with four
								years of experience, I have honed my skills
								primarily in ReactJS. My journey began with
								personal projects that allowed me to explore
								different aspects of front-end development, from
								UI/UX design to implementing complex
								functionalities.
							</p>
							<br />
							<p>
								Over the years, I have worked on numerous
								projects for clients, delivering high-quality,
								responsive, and user-friendly web applications.
							</p>
							<br />
							<p>
								For the past two years, I have been employed as
								a Front-End Developer at LockSelf, a
								cybersecurity company where I have been
								instrumental in developing and maintaining
								secure and scalable web applications. My role
								involves collaborating closely with back-end
								developers, designers, and product managers to
								ensure seamless integration and optimal user
								experience. My work at LockSelf has deepened my
								expertise in front-end technologies,
								particularly ReactJS, while also broadening my
								understanding of cybersecurity practices. My
								journey as a developer has been driven by
								continuous learning and a strong commitment to
								excellence.
							</p>
							<br />I take pride in delivering well-structured,
							clean code and staying up-to-date with the latest
							industry trends. I am always eager to take on new
							challenges and contribute to meaningful projects
							that make a difference.
						</div>
					</div>
				</div>
			)}
			{target === "discover" && (
				<div className={`popupContainerContent ${target}`}>
					<div className="contentLeft">
						<div className={`title ${target}`}>Community</div>
						<ul>
							<li
								className={target}
								onClick={() => handleRedirect("/home/activity")}
							>
								<div className={`iconUseCase ${target}`}>
									<Activity className="activity" />
								</div>
								<div className={`containerText ${target}`}>
									<div className="textUp">Activity</div>
								</div>
							</li>
							<li
								className={target}
								onClick={() => handleRedirect("/home/projects")}
							>
								<div className={`iconUseCase ${target}`}>
									<Rocket className="rocket" />
								</div>
								<div className={`containerText ${target}`}>
									<div className="textUp">Projects</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Popup

