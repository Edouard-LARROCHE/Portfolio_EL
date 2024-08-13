import type { ProjectsProps } from "./types"

import "./projects.scss"

const Projects = ({ repos }: ProjectsProps) => {
	return (
		<div style={{ color: "red" }}>
			{repos?.map((repo) => <div key={repo.id}>{repo.name}</div>)}
		</div>
	)
}

export default Projects

