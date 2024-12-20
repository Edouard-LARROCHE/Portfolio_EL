import { useAppSelector } from "../../types/store.types"

import type { ButtonsProps } from "./types"

import "./buttons.scss"

const Buttons = ({
	color,
	text,
	isActive,
	onClick,
}: ButtonsProps & { isActive: boolean; onClick: () => void }) => {
	const buttonColor = useAppSelector((state) => state.custom.buttonColor)

	return (
		<div className={`buttons ${color}`}>
			<button
				style={{
					backgroundColor: isActive ? buttonColor : "transparent",
				}}
				className={`button ${isActive ? "active" : ""}`}
				onClick={onClick}
			>
				<span className="buttonText">{text}</span>
			</button>
		</div>
	)
}

export default Buttons

