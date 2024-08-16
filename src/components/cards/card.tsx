import {
	truncate,
	capitalizeFirstLetter,
	transformAndSortLanguages,
} from "../../utils/utils"
import type { CardProps } from "./types"

import Fork from "../../assets/icons/fork.svg?react"

import "./card.scss"

const Card = ({ data }: CardProps) => {
	const transformedLanguages = transformAndSortLanguages(data.languages)
	const languageKeys = Object.keys(transformedLanguages)
	const shouldDisplayLanguages = languageKeys.length > 0

	return (
		<div className="cardContainer">
			<div className="card-body">
				<div className="top-card">
					<div className="card-logo">LOGO</div>
					<div className="topCardContainer">
						<div className="card-title">
							{capitalizeFirstLetter(truncate(data.name, 15))}
						</div>
						<div className="icon">
							<Fork />
							<div className="fork-count">{data.forks_count}</div>
						</div>
						{shouldDisplayLanguages && (
							<div className="language-container">
								# {languageKeys.join(", ")}
							</div>
						)}
					</div>
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

