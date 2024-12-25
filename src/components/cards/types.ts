export type CardProps = {
	loading?: boolean
	target?: "projects" | "activity" | "contact"
	data: {
		id: number
		name: string
		forks_count: number
		owner: {
			login: string
		}
		html_url: string
		languages: Record<string, number>
	} | null
	updatedProjects: {
		logo?: string | null
		description: string
		id?: number
	}[]
}
