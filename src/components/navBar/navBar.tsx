import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useScreenSize } from "../../context/hooks/screenSizeHooks"

import type { Button } from "./types"
import Popup from "../popup/popup"

import Logo from "../../assets/icons/logo.svg?react"
import Arrow from "../../assets/icons/arrow.svg?react"

import "./navBar.scss"

const NavBar = () => {
	const screenSize = useScreenSize()
	const { t } = useTranslation()

	const [isPopupOpen, setIsPopupOpen] = useState<Record<Button, boolean>>({
		firstButton: false,
		secondButton: false,
		thirdButton: false,
	})

	const timeoutRefs = useRef<Record<Button, number | null>>({
		firstButton: null,
		secondButton: null,
		thirdButton: null,
	})

	const handleDisplayPopup = (button: Button, isOpen: boolean) => {
		if (timeoutRefs.current[button]) {
			clearTimeout(timeoutRefs.current[button]!)
		}

		timeoutRefs.current[button] = setTimeout(() => {
			setIsPopupOpen((prevState) => ({
				...prevState,
				[button]: isOpen,
			}))
		}, 300)
	}

	const handleClickClosePopup = (button: Button) => {
		setIsPopupOpen((prevState) => ({
			...prevState,
			[button]: !isPopupOpen[button],
		}))
	}

	return (
		<div className="containerNavBar">
			<div className="navBar">
				{screenSize !== "mobile" && (
					<div className="logo">
						<Logo />
					</div>
				)}
				<div
					id="firstButton"
					className={`containerButton ${isPopupOpen.firstButton ? "open" : ""}`}
					onClick={() => handleClickClosePopup("firstButton")}
					onMouseEnter={() => handleDisplayPopup("firstButton", true)}
					onMouseLeave={() =>
						handleDisplayPopup("firstButton", false)
					}
				>
					<div className="text">{t("navBar.whyme")}</div>
					<div
						className={`icon ${isPopupOpen.firstButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.firstButton && (
						<Popup
							target="withMe"
							size="large"
							stopPropagation={(e) => e.stopPropagation()}
							onMouseEnter={() =>
								handleDisplayPopup("firstButton", true)
							}
							onMouseLeave={() =>
								handleDisplayPopup("firstButton", false)
							}
						/>
					)}
				</div>
				<div
					id="secondButton"
					className={`containerButton ${isPopupOpen.secondButton ? "open" : ""}`}
					onClick={() => handleClickClosePopup("secondButton")}
					onMouseEnter={() =>
						handleDisplayPopup("secondButton", true)
					}
					onMouseLeave={() =>
						handleDisplayPopup("secondButton", false)
					}
				>
					<div className="text">{t("navBar.discover")}</div>
					<div
						className={`icon ${isPopupOpen.secondButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.secondButton && (
						<Popup
							target="discover"
							size="medium"
							stopPropagation={(e) => e.stopPropagation()}
							onMouseEnter={() =>
								handleDisplayPopup("secondButton", true)
							}
							onMouseLeave={() =>
								handleDisplayPopup("secondButton", false)
							}
						/>
					)}
				</div>
				<div
					id="thirdButton"
					className={`containerButton ${isPopupOpen.thirdButton ? "open" : ""}`}
					onClick={() => handleClickClosePopup("thirdButton")}
					onMouseEnter={() => handleDisplayPopup("thirdButton", true)}
					onMouseLeave={() =>
						handleDisplayPopup("thirdButton", false)
					}
				>
					<div className="text">{t("navBar.shared")}</div>
					<div
						className={`icon ${isPopupOpen.thirdButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.thirdButton && (
						<Popup
							target="shared"
							size="small"
							stopPropagation={(e) => e.stopPropagation()}
							onMouseEnter={() =>
								handleDisplayPopup("thirdButton", true)
							}
							onMouseLeave={() =>
								handleDisplayPopup("thirdButton", false)
							}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default NavBar
