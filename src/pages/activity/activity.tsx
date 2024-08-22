import { useState, useEffect } from "react"

import { TimeActivity } from "../../utils/utils"
import { getGithubActivity } from "../../services/services"

import LoadingText from "../../components/animations/loader/loaderText"
import Card from "../../components/cards/card"

import "./activity.scss"

const Activity = () => {
	const [activity, setActivity] = useState<any>([])
	const [loading, setLoading] = useState(true)

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
				setLoading(false)
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
							{loading ? (
								<div className="containerLogo">
									<div className="containerLoader">
										<LoadingText
											type={["all"]}
											number={1}
										/>
									</div>
								</div>
							) : (
								<div className="containerLogo"></div>
							)}
							{loading ? (
								<div className="containerLoader">
									<LoadingText
										type={["long", "medium"]}
										number={2}
									/>
								</div>
							) : (
								<div className="containerInfos">
									<div className="descCard">
										{commit.commit.message}
									</div>
									<div className="timeActivity">
										{TimeActivity(
											commit.commit.committer.date,
										)}
									</div>
								</div>
							)}
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

