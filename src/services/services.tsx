export const getGithubProfile = async () => {
	const GITHUB_TOKEN = import.meta.env.VITE_API_GITHUB_TOKEN
	const URL = import.meta.env.VITE_API_GITHUB_URL

	const profile = await fetch(`${URL}/user`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	}).then((response) => response.json())

	return profile
}

export const getGithubRepos = async () => {
	const GITHUB_TOKEN = import.meta.env.VITE_API_GITHUB_TOKEN

	const repos = await fetch(`${URL}/user/repos`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	}).then((response) => response.json())

	return repos
}

