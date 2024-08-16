export type ProjectsProps = {
	repos: {
		id: number
		name: string
		forks_count: number
		owner: {
			login: string
		}
		languages: Record<string, number>
	}[]
}

