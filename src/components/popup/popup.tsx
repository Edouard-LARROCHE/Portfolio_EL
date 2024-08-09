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
								<div className="containerText">
									<div className="textUp">
										Tech Enthusiast
									</div>
									<div className="textDown">
										Expert in modern development and
										innovative solutions.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Cyber />
								</div>
								<div className="containerText">
									<div className="textUp">Security First</div>
									<div className="textDown">
										Protecting systems and sensitive data
										with precision.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Leader />
								</div>
								<div className="containerText">
									<div className="textUp">
										Committed Leader
									</div>
									<div className="textDown">
										Guiding teams to achieve collective
										excellence.
									</div>
								</div>
							</li>
							<li>
								<div className="iconUseCase">
									<Archi />
								</div>
								<div className="containerText">
									<div className="textUp">Web Architect</div>
									<div className="textDown">
										Designing robust and scalable web
										architectures.
									</div>
								</div>
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

