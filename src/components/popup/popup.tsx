import React from "react"

import type { PopupProps } from "./types"

import "./popup.scss"

const Popup = ({ text, size, onMouseEnter, onMouseLeave }: PopupProps) => {
	return (
		<div
			className={`containerPopup ${size}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="text">{text}</div>
		</div>
	)
}

export default Popup

