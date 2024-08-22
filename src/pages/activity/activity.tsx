import { useState, useEffect } from "react"

import { getGithubActivity } from "../../services/services"

import Card from "../../components/cards/card"

import "./activity.scss"

const Activity = () => {
	const [activity, setActivity] = useState<any>([])

	useEffect(() => {
		getGithubActivity({
			userName: "Edouard-LARROCHE",
			repoName: "Portfolio_EL",
		}).then((activity: any) => {
			setActivity(activity)
		})
	}, [])

	console.log(activity, "activity")

	return (
		<div className="activityContainer">
			<Card data={null} updatedProjects={[]} target="activity" />
		</div>
	)
}

export default Activity

