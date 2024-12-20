import React, { useState, useEffect } from "react"
import { useAppSelector } from "../../types/store.types"
import { useLocation } from "react-router-dom"

import { useScreenSize } from "../../context/hooks/screenSizeHooks"

import { ActivityProps } from "../../pages/activity/types"

import "./scrollToTop.scss"

const ScrollToTop: React.FC<ActivityProps> = ({ scrollableRef }) => {
	const screenSize = useScreenSize()
	const location = useLocation()

	const primaryColor = useAppSelector((state) => state.custom.primaryColor)

	const [isVisible, setIsVisible] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		if (scrollableRef && scrollableRef.current) {
			const scrollableElement = scrollableRef.current
			const toggleVisibility = () => {
				if (scrollableElement.scrollTop > 500) {
					setIsVisible(true)
				} else {
					setIsVisible(false)
				}
			}

			scrollableElement.addEventListener("scroll", toggleVisibility)
			return () =>
				scrollableElement.removeEventListener(
					"scroll",
					toggleVisibility,
				)
		}
	}, [scrollableRef])

	const scrollToTop = () => {
		if (scrollableRef && scrollableRef.current) {
			scrollableRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		}
	}

	return (
		<div
			className={`scrollToTopContainer ${isVisible ? "visible" : ""} ${screenSize === "desktop" && location.pathname === "/home/projects" ? "customPosition" : ""}`}
			onClick={scrollToTop}
		>
			<div
				className="scrollTop"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={{
					color: isHovered ? primaryColor : "",
					borderColor: isHovered ? primaryColor : "",
				}}
			/>
		</div>
	)
}

export default ScrollToTop

