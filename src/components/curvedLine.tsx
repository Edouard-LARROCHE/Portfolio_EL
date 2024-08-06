import React from "react"

import "./curvedLine.scss"

const CurvedLine = () => {
	return (
		<svg
			className="curvedLine"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<path
				d="M55,0 C55,25 55,75 55,100"
				stroke="white"
				strokeWidth=".1"
				fill="none"
			/>
		</svg>
	)
}

export default CurvedLine

