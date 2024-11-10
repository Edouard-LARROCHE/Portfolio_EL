import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import LeftSide from "../leftSide/index"
import RightSide from "../rightSide/index"
import ArrowAnim from "../../components/animations/arrow/arrowAnim"

import "./scss/index.scss"

const LayoutMobile = () => {
	const navigate = useNavigate()

	const [showRightSide, setShowRightSide] = useState(false)
	const [startX, setStartX] = useState(0)

	useEffect(() => {
		if (showRightSide) {
			navigate("/home/activity")
		} else {
			navigate("/home")
		}
	}, [showRightSide])

	const toggleSide = () => {
		setShowRightSide(!showRightSide)
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		if (e.touches && e.touches.length > 0) {
			setStartX(e.touches[0].clientX)
		}
	}

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		if (e.changedTouches && e.changedTouches.length > 0) {
			const endX = e.changedTouches[0].clientX

			if (startX - endX > 50) {
				setShowRightSide(true)
			} else if (endX - startX > 50) {
				setShowRightSide(false)
			}
		}
	}

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setStartX(e.clientX)
	}

	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
		const endX = e.clientX

		if (startX - endX > 50) {
			setShowRightSide(true)
		} else if (endX - startX > 50) {
			setShowRightSide(false)
		}
	}

	return (
		<div
			className={`layout ${showRightSide ? "show-right-side" : ""}`}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div className="side-container">
				<LeftSide />
			</div>
			<div className="side-container">
				<RightSide />
			</div>
			<div className="toggle-arrow">
				{!showRightSide && <ArrowAnim onClick={toggleSide} />}
			</div>
		</div>
	)
}

export default LayoutMobile

