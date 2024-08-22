import { useEffect, useRef } from "react"

import "./borderAnim.scss"

const BorderAnim = () => {
	const animRef = useRef<HTMLDivElement>(null)

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
			<div className="span animated"></div>
			<div className="span animated"></div>
			<div className="span animated"></div>
			<div className="span animated"></div>
		</div>
	)
}

export default BorderAnim

