import { formatDistanceToNow } from "date-fns"

type Languages = {
	[key: string]: number
}

export const truncate = (str: string, n: number) => {
	if (str.length <= n) return str
	return str.slice(0, n - 1) + "..."
}

export const capitalizeFirstLetter = (string: string) => {
	if (!string) return ""
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export const transformAndSortLanguages = (languages: Languages): Languages => {
	if (!languages || typeof languages !== "object") {
		return {}
	}

	return Object.entries(languages)
		.filter(([key]) => key !== "HTML")
		.map(([key, value]) => {
			if (key === "JavaScript") {
				key = "React"
			}
			return [key, value]
		})
		.sort((a, b) => b[1] - a[1])
		.reduce((acc, [key, value]) => {
			acc[key] = value
			return acc
		}, {} as Languages)
}

export const TimeActivity = (commit: string) => {
	const commitDate = new Date(commit)
	const timeAgo = formatDistanceToNow(commitDate, { addSuffix: true })

	return <div className="timeActivity">{timeAgo}</div>
}

export const validateEmail = (email: string) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(email)
}

