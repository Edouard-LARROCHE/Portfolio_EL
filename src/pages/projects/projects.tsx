import Card from "../../components/cards/card"

import type { ProjectsProps } from "./types"

import "./projects.scss"

const Projects = ({ repos, loading }: ProjectsProps) => {
	const loadingCards = Array.from({ length: 8 }, (_, index) => {
		return (
			<div key={index}>
				<Card data={null} loading />
			</div>
		)
	})

	return (
		<div className="projectsContainer">
			{loading
				? loadingCards
				: repos?.map((repo) => (
						<div key={repo.id}>
							<Card data={repo} />
						</div>
					))}
		</div>
	)
}

export default Projects

