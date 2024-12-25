import { useState, useEffect, ReactNode } from "react"

import { ScreenSizeContext } from "../screenSizeContext"

type ScreenSizeProviderProps = {
	children: ReactNode
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
	children,
}) => {
	const [screenSize, setScreenSize] = useState("desktop")

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1100) {
				setScreenSize("desktop")
			} else if (window.innerWidth >= 390 && window.innerWidth < 1100) {
				setScreenSize("mobile")
			} else {
				setScreenSize("tooSmall")
			}
		}

		handleResize()
		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<ScreenSizeContext.Provider value={screenSize}>
			{children}
		</ScreenSizeContext.Provider>
	)
}
