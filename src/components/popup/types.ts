export type PopupProps = {
	target: "withMe" | "discover" | "shared"
	size: "small" | "medium" | "large"
	onMouseEnter: () => void
	onMouseLeave: () => void
	stopPropagation: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

