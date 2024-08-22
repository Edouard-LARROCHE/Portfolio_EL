export type ProjectsProps = {
	loading: boolean
	repos: {
		id: number
		name: string
		forks_count: number
		owner: {
			login: string
		}
		html_url: string
		languages: Record<string, number>
	}[]
}

