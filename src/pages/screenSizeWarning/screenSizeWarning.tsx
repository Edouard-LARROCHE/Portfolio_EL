import LoaderBar from "../../components/animations/loader/loaderBar/loaderBar"

import ConstellationSVG from "../../assets/icons/constellation.svg?react"

import "./screenSizeWarning.scss"

const ScreenSizeWarning = () => {
	return (
		<div className="screenSizeWarning">
			<div className="text">Under construction...</div>
			<LoaderBar />
			<div className="extendText">
				Please return to a suitable screen.
			</div>
			<div className="constellation">
				<ConstellationSVG />
			</div>
		</div>
	)
}

export default ScreenSizeWarning
