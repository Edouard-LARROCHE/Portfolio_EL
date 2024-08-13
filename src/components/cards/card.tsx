import { useEffect, useState } from "react"

import { truncate } from "../../utils/utils"
import type { CardProps } from "./types"
import { getGitHubLanguagesRepositories } from "../../services/services"

import Fork from "../../assets/icons/fork.svg?react"

import "./card.scss"

const Card = ({ data }: CardProps) => {
	useEffect(() => {
		getGitHubLanguagesRepositories({
			userName: data.owner.login,
			repoName: data.name,
		}).then((data) => {
			console.log(data)
		})
	}, [data])

	return (
		<div className="cardContainer">
			<div className="card-body">
				<div className="top-card">
					<div className="card-logo">LOGO</div>
					<div className="topCardContainer">
						<div className="card-title">
							{truncate(data.name, 15)}
						</div>
						<div className="icon">
							<Fork />
							<div className="fork-count">{data.forks_count}</div>
						</div>
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

