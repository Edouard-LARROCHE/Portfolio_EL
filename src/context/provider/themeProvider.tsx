import React, { useState, useEffect, ReactNode } from "react"

import { ThemeContext } from "../themeContext"

type ThemeMode = "light" | "dark"

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeMode>(() => {
		const savedTheme = localStorage.getItem("getUpMode") as ThemeMode | null
		if (savedTheme) {
			return savedTheme
		}

		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark"
		}

		return "dark"
	})

	useEffect(() => {
		document.body.classList.toggle("dark-mode", theme === "dark")
		localStorage.setItem("getUpMode", theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
