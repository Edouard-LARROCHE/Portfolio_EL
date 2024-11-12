import { useContext } from "react"

import { ScreenSizeContext } from "../screenSizeContext"

export const useScreenSize = () => {
	return useContext(ScreenSizeContext)
}
