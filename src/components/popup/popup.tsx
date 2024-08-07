import type { PopupProps } from "./types"

import Techno from "../../assets/icons/techno.svg?react"
import Cyber from "../../assets/icons/cyber-secu.svg?react"
import Leader from "../../assets/icons/leader.svg?react"
import Archi from "../../assets/icons/archiWeb.svg?react"

import "./popup.scss"

const Popup = ({
	target,
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
		>
			{target === "withMe" && (
				<div className="popupContainerContent">
					<div className="contentLeft">
						<div className="title">Use cases</div>
						<ul>
							<li>
								<div className="iconUseCase">
									<Techno />
								</div>
								<div className="textUp">lorem ipsum justo</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Cyber />
								</div>
								<div className="textUp">lorem ipsum justo</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Leader />
								</div>
								<div className="textUp">lorem ipsum justo</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Archi />
								</div>
								<div className="textUp">lorem ipsum justo</div>
							</li>
						</ul>
					</div>
					<div className="contentRight">
						<div className="title">User storie</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Popup

