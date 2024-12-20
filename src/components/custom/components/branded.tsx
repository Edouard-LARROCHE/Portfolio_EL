import { useAppDispatch } from "../../../types/store.types"
import { setCustomPopup } from "../../../store/slice/global.slice"
import { setReset } from "../../../store/slice/custom.slice"

import CrossIcon from "../../../assets/icons/cross.svg?react"
import ReloadIcon from "../../../assets/icons/reload.svg?react"

import "./scss/branded.scss"

const Branded = () => {
	const dispatch = useAppDispatch()

	return (
		<div className="containerBranded">
			<div className="pill">Custom</div>
			<div className="containerIcon">
				<ReloadIcon
					className="crossIcon"
					onClick={() => dispatch(setReset())}
				/>
			</div>
			<div className="containerIcon">
				<CrossIcon
					className="crossIcon"
					onClick={() => dispatch(setCustomPopup(false))}
				/>
			</div>
		</div>
	)
}

export default Branded

