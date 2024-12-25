const GITHUB_TOKEN = import.meta.env.VITE_API_GITHUB_TOKEN
const URL = import.meta.env.VITE_API_GITHUB_URL

export const getGithubProfile = async () => {
	const profile = await fetch(`${URL}/user`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	}).then((response) => response.json())

	return profile
}

export const getGithubReposWithLanguages = async () => {
	const repos = await fetch(`${URL}/user/repos`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	}).then((response) => response.json())

	const reposWithLanguages = await Promise.all(
		repos.map(async (repo: { owner: { login: any }; name: any }) => {
			const languages = await getGitHubLanguagesRepositories({
				userName: repo.owner.login,
				repoName: repo.name,
			})

			return {
				...repo,
				languages,
			}
		}),
	)

	return reposWithLanguages
}

export const getGithubRepos = async () => {
	const repos = await fetch(`${URL}/user/repos`, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
		},
	}).then((response) => response.json())

	return repos
}

export const getGitHubLanguagesRepositories = async ({
	userName,
	repoName,
}: {
	userName: string
	repoName: string
}) => {
	const languages = await fetch(
		`${URL}/repos/${userName}/${repoName}/languages`,
		{
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		},
	).then((response) => response.json())

	return languages
}

export const getGithubActivity = async ({
	userName,
	repoName,
}: {
	userName: string
	repoName: string
}) => {
	const activity = await fetch(
		`${URL}/repos/${userName}/${repoName}/commits`,
		{
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		},
	).then((response) => response.json())

	return activity
}
