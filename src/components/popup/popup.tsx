import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../types/store.types"
import { useTranslation } from "react-i18next"
import { Switch, Select } from "antd"

import { useScreenSize } from "../../context/hooks/screenSizeHooks"
import { useTheme } from "../../context/hooks/themeHooks"
import { setCustomPopup } from "../../store/slice/global.slice"

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
	const dispatch = useAppDispatch()
	const screenSize = useScreenSize()
	const { theme, toggleTheme } = useTheme()
	const navigate = useNavigate()
	const location = useLocation()
	const { i18n, t } = useTranslation()

	const customPopupOpen = useAppSelector((state) => state.global.customPopup)
	const custom = useAppSelector((state) => state.custom)

	const [customPopup, setCustomPopupOpen] = useState(customPopupOpen)

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

	const handleCustomPopup = () => {
		setCustomPopupOpen(!customPopup)

		dispatch(setCustomPopup(!customPopup))
	}

	const handleClickFollowMe = () => {
		window.open(`${import.meta.env.VITE_API_REDIRECT_GITHUB}`, "_blank")
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
						<div className="title">
							{t("fisrtPopup.useCase.useCases")}
						</div>
						<ul>
							<li>
								<div className="iconUseCase">
									<Techno />
								</div>
								<div className="containerText">
									<div className="textUp">
										{t(
											"fisrtPopup.useCase.techEnthusiast.title",
										)}
									</div>
									<div className="textDown">
										{t(
											"fisrtPopup.useCase.techEnthusiast.desc",
										)}
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Cyber />
								</div>
								<div className="containerText">
									<div className="textUp">
										{t(
											"fisrtPopup.useCase.securityFirst.title",
										)}
									</div>
									<div className="textDown">
										{t(
											"fisrtPopup.useCase.securityFirst.desc",
										)}
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Leader />
								</div>
								<div className="containerText">
									<div className="textUp">
										{t(
											"fisrtPopup.useCase.committedLeader.title",
										)}
									</div>
									<div className="textDown">
										{t(
											"fisrtPopup.useCase.committedLeader.desc",
										)}
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Archi />
								</div>
								<div className="containerText">
									<div className="textUp">
										{t(
											"fisrtPopup.useCase.webArchitect.title",
										)}
									</div>
									<div className="textDown">
										{t(
											"fisrtPopup.useCase.webArchitect.desc",
										)}
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="contentRight">
						<div className="title">
							{t("fisrtPopup.userStory.title")}
						</div>
						<div className="text">
							<p>{t("fisrtPopup.userStory.text.p1")}</p>
							<br />
							<p>{t("fisrtPopup.userStory.text.p2")}</p>
							<br />
							<p>{t("fisrtPopup.userStory.text.p3")}</p>
							<br />
							<p>{t("fisrtPopup.userStory.text.p4")}</p>
						</div>
					</div>
				</div>
			)}
			{target === "discover" && (
				<div className={`popupContainerContent ${target}`}>
					{screenSize === "desktop" && (
						<div className="contentLeft">
							<div className={`title ${target}`}>
								{t("secondPopup.community.title")}
							</div>
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
											{t(
												"secondPopup.community.options.activity",
											)}
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
											{t(
												"secondPopup.community.options.projects",
											)}
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
											{t(
												"secondPopup.community.options.reviews",
											)}
										</div>
									</div>
								</li>
							</ul>
						</div>
					)}
					<div className="contentRight">
						<div className={`title ${target}`}>
							{t("secondPopup.options.title")}
						</div>
						<div className="containerDM">
							<span>
								{theme === "light"
									? t("secondPopup.options.dm.light")
									: t("secondPopup.options.dm.dark")}
							</span>
							<Switch
								style={{
									backgroundColor:
										theme === "dark"
											? custom.primaryColor
											: custom.buttonColor,
								}}
								checked={theme === "dark"}
								onChange={toggleTheme}
							/>
						</div>
						<div className="containerCustom">
							<span>{t("Custom")}</span>
							<Switch
								style={{
									backgroundColor: customPopupOpen
										? custom.primaryColor
										: custom.buttonColor,
								}}
								checked={customPopupOpen}
								onChange={handleCustomPopup}
							/>
						</div>
						<div className="containerLanguage">
							<Select
								defaultValue={i18n.language}
								style={{ width: 120 }}
								onChange={handleLanguageChange}
								options={[
									{
										value: "en",
										label: t(
											"secondPopup.options.language.en",
										),
									},
									{
										value: "fr",
										label: t(
											"secondPopup.options.language.fr",
										),
									},
								]}
							/>
						</div>
					</div>
				</div>
			)}
			{target === "shared" && (
				<div className={`popupContainerContent ${target}`}>
					<div className="contentLeft">
						<div className={`title ${target}`}>
							{t("thirdPopup.title")}
						</div>
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
									{t("thirdPopup.sendMessage")}
									<Arrow2 className="arrow2" />
								</div>
							)}
							<div
								className="followMe"
								onClick={() => handleClickFollowMe()}
							>
								{t("thirdPopup.followMe")}{" "}
								<Heart className="heart" />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Popup

