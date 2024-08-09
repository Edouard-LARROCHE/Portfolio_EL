import { useState } from "react"

import type { ButtonsProps } from "./types"

import "./buttons.scss"

const Buttons = ({ key, color, text }: ButtonsProps) => {
	const [active, setActive] = useState(false)

	const handleClick = (key: number) => {
		setActive(key === key)
	}

	return (
		<div className={`buttons ${color}`}>
			<button
				className={`button ${active ? "active" : ""}`}
				onClick={() => handleClick(key)}
			>
				<span className="buttonText">{text}</span>
			</button>
		</div>
	)
}

export default Buttons

