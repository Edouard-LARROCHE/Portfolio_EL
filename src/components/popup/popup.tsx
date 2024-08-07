import type { PopupProps } from "./types"

import "./popup.scss"

const Popup = ({ size, onMouseEnter, onMouseLeave }: PopupProps) => {
	return (
		<div
			className={`containerPopup ${size}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		></div>
	)
}

export default Popup

