import { useEffect, useRef } from "react"
import { useAppSelector } from "../../../types/store.types"

import "./borderAnim.scss"

const BorderAnim = () => {
	const animRef = useRef<HTMLDivElement>(null)

	const snakeColor = useAppSelector((state) => state.custom.snakeColor)

	useEffect(() => {
		const interval = setInterval(() => {
			if (animRef.current) {
				const elements = animRef.current.querySelectorAll(".span")

				elements.forEach((element) => {
					element.classList.remove("animated")
				})

				void animRef.current.offsetWidth

				elements.forEach((element) => {
					element.classList.add("animated")
				})
			}
		}, 12000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div ref={animRef}>
			<div
				className="span animated"
				style={{ backgroundColor: snakeColor }}
			/>
			<div
				className="span animated"
				style={{ backgroundColor: snakeColor }}
			/>
			<div
				className="span animated"
				style={{ backgroundColor: snakeColor }}
			/>
			<div
				className="span animated"
				style={{ backgroundColor: snakeColor }}
			/>
		</div>
	)
}

export default BorderAnim

