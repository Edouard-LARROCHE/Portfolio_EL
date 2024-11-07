import React, { useState, useEffect } from "react"

import { ActivityProps } from "../../pages/activity/types"

import "./scrollToTop.scss"

const ScrollToTop: React.FC<ActivityProps> = ({ scrollableRef }) => {
	const [isVisible, setIsVisible] = useState(false)

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
			className={`scrollToTopContainer ${isVisible ? "visible" : ""}`}
			onClick={scrollToTop}
		>
			<div className="scrollTop" />
		</div>
	)
}

export default ScrollToTop

