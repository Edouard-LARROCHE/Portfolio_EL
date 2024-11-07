import React, { useState, useEffect } from "react"

import { ActivityProps } from "./types"

import { TimeActivity } from "../../utils/utils"
import { getGithubActivity } from "../../services/services"

import LoadingText from "../../components/animations/loader/loaderText"
import Card from "../../components/cards/card"
import ScrollToTop from "../../components/scroller/scrollToTop"

import DefaultLogo from "../../assets/icons/logo.svg?react"
import MergedLogo from "../../assets/icons/activity/merge.svg?react"
import OtherLogo1 from "../../assets/icons/activity/other-1.svg?react"
import Archi from "../../assets/icons/activity/archi.svg?react"
import Polygon from "../../assets/icons/activity/polygon.svg?react"
import Stars from "../../assets/icons/activity/stars.svg?react"
import TriangleDown from "../../assets/icons/activity/triangle-down.svg?react"

import "./activity.scss"

const Activity: React.FC<ActivityProps> = ({ scrollableRef }) => {
	const [activity, setActivity] = useState<any>([])
	const [loading, setLoading] = useState(true)
	const [commitsByProject, setCommitsByProject] = useState<any>({})

	const repos = [
		"Le-11-Marseille",
		"Portfolio_EL",
		"Lock-self",
		"Maison-Morin",
		"Lock-self",
		"Oovy",
		"Tri-kot",
	]

	const loadingActivity = Array.from({ length: 8 }, (_, index) => {
		return (
			<>
				<div key={index} className="activityCard loading">
					<div className="containerLogo">
						<div className="containerLoader">
							<LoadingText type={["all"]} number={1} />
						</div>
					</div>
					<div className="containerLoader">
						<LoadingText type={["long", "medium"]} number={2} />
					</div>
				</div>
				<div className="tils" />
			</>
		)
	})

	useEffect(() => {
		Promise.all(
			repos.map((repo) =>
				getGithubActivity({
					userName: import.meta.env.VITE_API_USER_NAME,
					repoName: repo,
				}).then((commits) =>
					commits.map((commit: any) => ({
						...commit,
						projectName: repo,
					})),
				),
			),
		)
			.then((commits) => {
				const allCommits = commits.flat()
				const sortedCommits = allCommits.sort(
					(a, b) =>
						new Date(b.commit.committer.date).getTime() -
						new Date(a.commit.committer.date).getTime(),
				)

				setActivity(sortedCommits)
				setLoading(false)

				const groupedCommits = allCommits.reduce(
					(acc: any, commit: any) => {
						const projectName = commit.projectName
						if (!acc[projectName]) {
							acc[projectName] = []
						}
						acc[projectName].push(commit)
						return acc
					},
					{},
				)

				setCommitsByProject(groupedCommits)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	const getIcon = (commit: any) => {
		const projectName = commit.projectName
		const commitsForProject = commitsByProject[projectName] || []
		const commitIndex = commitsForProject.indexOf(commit)

		if (commitIndex === 1) {
			return <DefaultLogo className="defaultLogo" />
		}

		if (commit.commit.message.includes("Merge")) {
			return <MergedLogo />
		}

		const icons = [
			{ component: <OtherLogo1 />, className: "otherLogo" },
			{ component: <Archi />, className: "archiLogo" },
			{ component: <Polygon />, className: "polygonLogo" },
			{ component: <Stars />, className: "starsLogo" },
			{ component: <TriangleDown />, className: "triangleDownLogo" },
		]

		const randomIcon = icons[Math.floor(Math.random() * icons.length)]
		return React.cloneElement(randomIcon.component, {
			className: randomIcon.className,
		})
	}

	return (
		<div className="activityContainer">
			<Card data={activity} updatedProjects={[]} target="activity" />
			<div className="activityDashboard">
				{loading
					? loadingActivity
					: activity.map((commit: any, index: number) => (
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
										<div className="containerLogo">
											{getIcon(commit)}
										</div>
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
													commit.commit.committer
														.date,
												)}
											</div>
										</div>
									)}
									{commit.commit.message.includes(
										"Merge",
									) && (
										<div className="mergeInfo">
											<div className="tils horizontal" />
											{TimeActivity(
												commit.commit.committer.date,
												true,
											)}
										</div>
									)}
								</div>
								{index !== activity.length - 1 && (
									<div className="tils" />
								)}
							</>
						))}
			</div>
			<ScrollToTop scrollableRef={scrollableRef} />
		</div>
	)
}

export default Activity

