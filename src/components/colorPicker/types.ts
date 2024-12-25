export type ColorPickerProps = {
	color: string
	onChange: (color: string) => void
	label: "Primary" | "Secondary" | "Button" | "Snake"
}
