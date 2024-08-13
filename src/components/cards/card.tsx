import type { CardProps } from "./types"

import "./card.scss"

const Card = ({ data }: CardProps) => {
	return (
		<div className="cardContainer">
			<div className="card-body">
				<div className="top-card">
					<div className="card-logo">LOGO</div>
					<div className="card-title">{data.name}</div>
				</div>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
			</div>
		</div>
	)
}

export default Card

