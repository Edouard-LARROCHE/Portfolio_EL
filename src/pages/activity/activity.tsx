import { useState, useEffect } from "react"

import { getGithubActivity } from "../../services/services"
import Card from "../../components/cards/card"

import "./activity.scss"

const Activity = () => {
	const [activity, setActivity] = useState<any>([])

	useEffect(() => {
		const repos = [
			"Portfolio_EL",
			"Maison-Morin",
			"Lock-self",
			"Oovy",
			"Tri-kot",
		]

		Promise.all(
			repos.map((repo) =>
				getGithubActivity({
					userName: import.meta.env.VITE_API_USER_NAME,
					repoName: repo,
				}),
			),
		)
			.then((commits) => {
				const allCommits = commits.flat()
				setActivity(allCommits)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	console.log(activity, "activity")

	return (
		<div className="activityContainer">
			<Card data={activity} updatedProjects={[]} target="activity" />
			<div className="activityDashboard">
				{activity.map((commit: any, index: number) => (
					<>
						<div key={commit.sha} className="activityCard">
							<div className="containerLogo"></div>
							<div className="containerInfos">
								<div className="descCard">
									{commit.commit.message}
								</div>
								<div className="timeActivity">
									{new Date(
										commit.commit.committer.date,
									).toLocaleString()}
								</div>
							</div>
						</div>
						{index !== activity.length - 1 && (
							<div className="tils" />
						)}
					</>
				))}
			</div>
		</div>
	)
}

export default Activity

