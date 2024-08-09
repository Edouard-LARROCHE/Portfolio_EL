import type { ButtonsProps } from "./types"

import "./buttons.scss"

const Buttons = ({
	color,
	text,
	isActive,
	onClick,
}: ButtonsProps & { isActive: boolean; onClick: () => void }) => {
	return (
		<div className={`buttons ${color}`}>
			<button
				className={`button ${isActive ? "active" : ""}`}
				onClick={onClick}
			>
				<span className="buttonText">{text}</span>
			</button>
		</div>
	)
}

export default Buttons

