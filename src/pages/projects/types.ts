export type ProjectsProps = {
	scrollableRef?: React.RefObject<HTMLDivElement>
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

