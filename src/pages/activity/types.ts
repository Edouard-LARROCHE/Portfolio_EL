export type ActivityProps = {
	scrollableRef?: React.RefObject<HTMLDivElement>
	repos?: {
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

export type ActicityRef = {
	scrollableRef?: React.RefObject<HTMLDivElement>
}

