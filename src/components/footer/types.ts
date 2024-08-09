export type FooterDataProps = {
	data: {
		public_repos: number
		total_private_repos: number
		following: number
		followers: number
	} | null
	loadingData: boolean
	loadingRepos: boolean
	repos: any[] | null
}

