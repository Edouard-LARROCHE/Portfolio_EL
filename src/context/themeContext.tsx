import React from "react"

type ThemeMode = "light" | "dark"

export const ThemeContext = React.createContext<{
	theme: ThemeMode
	toggleTheme: () => void
}>({
	theme: "light",
	toggleTheme: () => {},
})
