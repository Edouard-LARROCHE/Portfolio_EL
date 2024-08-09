import type { loaderTextProps } from "../types"

import "./loaderText.scss"

const LoadingText = (props: loaderTextProps) => {
	const numberLoader = []

	for (let i = 0; i < props.number; i++) {
		numberLoader.push(
			<div className={`loadingText ${props.type[i]}`} key={i}></div>,
		)
	}

	if (props.number === 1) {
		return <div className={`loadingText ${props.type}`}>{numberLoader}</div>
	}

	return numberLoader
}

export default LoadingText

