export type PopupProps = {
	target: "withMe" | "projects" | "shared"
	size: "small" | "medium" | "large"
	onMouseEnter: () => void
	onMouseLeave: () => void
	stopPropagation: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

