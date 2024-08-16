export type CardProps = {
	data: {
		id: number
		name: string
		forks_count: number
		owner: {
			login: string
		}
		languages: Record<string, number>
	}
}

