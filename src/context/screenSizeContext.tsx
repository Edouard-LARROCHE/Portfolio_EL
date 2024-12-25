import React from "react"

type ScreenSize = "desktop" | "mobile" | "tablet" | string

export const ScreenSizeContext = React.createContext<ScreenSize>(null!)
