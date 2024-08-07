import type { PopupProps } from "./types"

import "./popup.scss"

const Popup = ({
	size,
	stopPropagation,
	onMouseEnter,
	onMouseLeave,
}: PopupProps) => {
	return (
		<div
			className={`containerPopup ${size}`}
			onClick={stopPropagation}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		></div>
	)
}

export default Popup

