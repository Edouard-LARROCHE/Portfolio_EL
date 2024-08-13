import Card from "../../components/cards/card"

import type { ProjectsProps } from "./types"

import "./projects.scss"

const Projects = ({ repos }: ProjectsProps) => {
	return (
		<div className="projectsContainer">
			{repos?.map((repo) => (
				<div key={repo.id}>
					<Card data={repo} />
				</div>
			))}
		</div>
	)
}

export default Projects

