import { useEffect, useState } from "react"

import "./ratingStar.scss"

const RatingStars = () => {
	const [activeStars, setActiveStars] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveStars((prev) => (prev < 5 ? prev + 1 : prev))
		}, 300)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="star-rating">
			{[...Array(5)].map((_, index) => (
				<span
					key={index}
					className={`star ${index < activeStars ? "active" : ""}`}
				>
					&#9733;
				</span>
			))}
		</div>
	)
}

export default RatingStars
