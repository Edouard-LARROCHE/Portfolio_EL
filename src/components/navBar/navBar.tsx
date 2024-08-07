import React, { useState, useRef } from "react"

import type { Button } from "./types"

import Popup from "../popup/popup"
import Arrow from "../../assets/icons/arrow.svg?react"

import "./navBar.scss"

const NavBar = () => {
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
			[button]: isPopupOpen[button] ? false : true,
		}))
	}

	return (
		<div className="containerNavBar">
			<div className="navBar">
				<div className="name">Edouard Lrc</div>
				<div
					id="firstButton"
					className="containerButton"
					onClick={() => handleClickClosePopup("firstButton")}
					onMouseEnter={() => handleDisplayPopup("firstButton", true)}
					onMouseLeave={() =>
						handleDisplayPopup("firstButton", false)
					}
				>
					<div className="text">Why me?</div>
					<div
						className={`icon ${isPopupOpen.firstButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.firstButton && (
						<Popup
							text=""
							size="large"
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
					className="containerButton"
					onClick={() => handleClickClosePopup("secondButton")}
					onMouseEnter={() =>
						handleDisplayPopup("secondButton", true)
					}
					onMouseLeave={() =>
						handleDisplayPopup("secondButton", false)
					}
				>
					<div className="text">Projects</div>
					<div
						className={`icon ${isPopupOpen.secondButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.secondButton && (
						<Popup
							text=""
							size="medium"
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
					id="thirdButton"
					className="containerButton"
					onClick={() => handleClickClosePopup("thirdButton")}
					onMouseEnter={() => handleDisplayPopup("thirdButton", true)}
					onMouseLeave={() =>
						handleDisplayPopup("thirdButton", false)
					}
				>
					<div className="text">Shared with me</div>
					<div
						className={`icon ${isPopupOpen.thirdButton ? "open" : ""}`}
					>
						<Arrow />
					</div>
					{isPopupOpen.thirdButton && (
						<Popup
							text=""
							size="medium"
							onMouseEnter={() =>
								handleDisplayPopup("firstButton", true)
							}
							onMouseLeave={() =>
								handleDisplayPopup("firstButton", false)
							}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default NavBar

