import { useEffect, useState } from "react"

import type { ProjectsProps } from "./types"

import ScrollToTop from "../../components/scroller/scrollToTop"
import Card from "../../components/cards/card"

import dataProjects from "../../data/data.projects.json"

import MarsBot from "../../assets/projects/img/mars-bot.png"
import WCS from "../../assets/projects/img/wildcodeschool.png"
import MM from "../../assets/projects/img/maison-morin.png"
import Le11 from "../../assets/projects/img/le11.png"

import "./projects.scss"

const Projects = ({ repos, loading, scrollableRef }: ProjectsProps) => {
	const images: { [key: string]: string | null } = {
		"": null,
		"mars-bot.png": MarsBot,
		"wildcodeschool.png": WCS,
		"apple.svg": "",
		"lockself.svg": "",
		"maison-morin.png": MM,
		"le11-marseille.png": Le11,
	}
	const initialProjects = dataProjects.projects.map((project) => {
		if (project.logo) {
			return {
				...project,
				logo: images[project.logo] || project.logo,
			}
		}
		return project
	})
	const [updatedProjects, setUpdatedProjects] = useState(initialProjects)

	useEffect(() => {
		if (repos && repos.length > 0) {
			assignIdsToProjects()
		}
	}, [repos])

	const assignIdsToProjects = () => {
		const projectsWithIds = [...updatedProjects] as any[]

		projectsWithIds.forEach((project, index) => {
			if (repos[index]) {
				project.id = repos[index].id
			}
		})

		setUpdatedProjects(projectsWithIds)
	}

	const loadingCards = Array.from({ length: 8 }, (_, index) => {
		return (
			<div key={index}>
				<Card
					data={null}
					loading
					updatedProjects={updatedProjects}
					target="projects"
				/>
			</div>
		)
	})

	return (
		<div className="projectsContainer">
			{loading
				? loadingCards
				: repos?.map((repo) => (
						<div key={repo.id}>
							<Card
								data={repo}
								updatedProjects={updatedProjects}
								target="projects"
							/>
						</div>
					))}
			<ScrollToTop scrollableRef={scrollableRef} />
		</div>
	)
}

export default Projects
