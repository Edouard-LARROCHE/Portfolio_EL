import { useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Switch, Select } from "antd"

import { useScreenSize } from "../../context/hooks/screenSizeHooks"
import { useTheme } from "../../context/hooks/themeHooks"

import type { PopupProps } from "./types"

import Techno from "../../assets/icons/techno.svg?react"
import Cyber from "../../assets/icons/cyber-secu.svg?react"
import Leader from "../../assets/icons/leader.svg?react"
import Archi from "../../assets/icons/archiWeb.svg?react"
import Activity from "../../assets/icons/activity.svg?react"
import Rocket from "../../assets/icons/rocket.svg?react"
import Heart from "../../assets/icons/heart.svg?react"
import Star from "../../assets/icons/star.svg?react"

import Discord from "../../assets/icons/contact/discord.svg?react"
import Github from "../../assets/icons/contact/github.svg?react"
import Linkedin from "../../assets/icons/contact/linkedin.svg?react"
import Mail from "../../assets/icons/contact/mail.svg?react"
import X from "../../assets/icons/contact/x.svg?react"
import Arrow2 from "../../assets/icons/arrow2.svg?react"

import "./popup.scss"

const Popup = ({
	target,
	size,
	stopPropagation,
	onMouseEnter,
	onMouseLeave,
}: PopupProps) => {
	const screenSize = useScreenSize()
	const { theme, toggleTheme } = useTheme()
	const navigate = useNavigate()
	const location = useLocation()
	const { i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	const handleLanguageChange = (value: string) => {
		changeLanguage(value)
	}

	const handleRedirect = (path: string) => {
		if (location.pathname !== path) {
			navigate(path)
		}
	}

	const handleClickFollowMe = () => {
		window.open(`${import.meta.env.VITE_API_REDIRECT_GITHUB}`, "_blank")
	}

	console.log(i18n.language, "i18n.language")

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
							<br />
							<p>
								I take pride in delivering well-structured,
								clean code and staying up-to-date with the
								latest industry trends. I am always eager to
								take on new challenges and contribute to
								meaningful projects that make a difference.
							</p>
						</div>
					</div>
				</div>
			)}
			{target === "discover" && (
				<div className={`popupContainerContent ${target}`}>
					{screenSize === "desktop" && (
						<div className="contentLeft">
							<div className={`title ${target}`}>Community</div>
							<ul>
								<li
									className={`${target} ${location.pathname === `/home/activity` ? "active" : ""}`}
									onClick={() =>
										handleRedirect("/home/activity")
									}
								>
									<div className={`iconUseCase ${target}`}>
										<Activity className="activity" />
									</div>
									<div className={`containerText ${target}`}>
										<div
											className={`textUp ${location.pathname === `/home/activity` ? "active" : ""}`}
										>
											Activity
										</div>
									</div>
								</li>
								<li
									className={`${target} ${location.pathname === `/home/projects` ? "active" : ""}`}
									onClick={() =>
										handleRedirect("/home/projects")
									}
								>
									<div className={`iconUseCase ${target}`}>
										<Rocket className="rocket" />
									</div>
									<div className={`containerText ${target}`}>
										<div
											className={`textUp ${location.pathname === `/home/projects` ? "active" : ""}`}
										>
											Projects
										</div>
									</div>
								</li>
								<li
									className={`${target} ${location.pathname === `/home/reviews` ? "active" : ""}`}
									onClick={() =>
										handleRedirect("/home/reviews")
									}
								>
									<div className={`iconUseCase ${target}`}>
										<Star className="star" />
									</div>
									<div className={`containerText ${target}`}>
										<div
											className={`textUp ${location.pathname === `/home/reviews` ? "active" : ""}`}
										>
											Reviews
										</div>
									</div>
								</li>
							</ul>
						</div>
					)}
					<div className="contentRight">
						<div className={`title ${target}`}>Options</div>
						<div className="containerDM">
							<span>{theme === "light" ? "Light" : "Dark"}</span>
							<Switch
								checked={theme === "dark"}
								onChange={toggleTheme}
							/>
						</div>
						<div className="containerLanguage">
							<Select
								defaultValue={i18n.language}
								style={{ width: 120 }}
								onChange={handleLanguageChange}
								options={[
									{ value: "en", label: "English" },
									{ value: "fr", label: "Français" },
								]}
							/>
						</div>
					</div>
				</div>
			)}
			{target === "shared" && (
				<div className={`popupContainerContent ${target}`}>
					<div className="contentLeft">
						<div className={`title ${target}`}>Contact</div>
						<ul className={`${target}`}>
							<li>
								<div className="containerIcon">
									<a
										href={`${import.meta.env.VITE_API_REDIRECT_DISCORD}`}
										target="_blank"
									>
										<Discord />
									</a>
								</div>
							</li>
							<li>
								<div className="containerIcon">
									<a
										href={`${import.meta.env.VITE_API_REDIRECT_GITHUB}`}
										target="_blank"
									>
										<Github />
									</a>
								</div>
							</li>
							<li>
								<div className="containerIcon">
									<a
										href={`${import.meta.env.VITE_API_REDIRECT_LINKEDIN}`}
										target="_blank"
									>
										<Linkedin />
									</a>
								</div>
							</li>
							<li>
								<div className="containerIcon">
									<a
										href={`${import.meta.env.VITE_API_REDIRECT_MAIL}`}
									>
										<Mail />
									</a>
								</div>
							</li>
							<li>
								<div className="containerIcon">
									<a
										href={`${import.meta.env.VITE_API_REDIRECT_X}`}
										target="_blank"
									>
										<X />
									</a>
								</div>
							</li>
						</ul>
						<div className="containerAction">
							{screenSize === "desktop" && (
								<div
									className="goToContact"
									onClick={() =>
										handleRedirect("/home/contact")
									}
								>
									Send me a message
									<Arrow2 className="arrow2" />
								</div>
							)}
							<div
								className="followMe"
								onClick={() => handleClickFollowMe()}
							>
								Follow me on <Heart className="heart" />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Popup

