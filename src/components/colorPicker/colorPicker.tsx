import { useEffect, useState } from "react"
import type { ChangeEvent, ReactElement } from "react"

import { type ColorPickerProps } from "./types"

import "./colorPicker.scss"

export default function ColorPicker({
	color,
	onChange,
	label,
}: ColorPickerProps): ReactElement {
	const [localColor, setLocalColor] = useState(color || "#ffffff")

	useEffect(() => {
		setLocalColor(color || "#ffffff")
	}, [color])

	function handleColorChange(eventType: number, value: string) {
		if (eventType === 2) {
			const colorValue = value

			setLocalColor(colorValue)
			onChange(colorValue)
		} else if (eventType === 1) {
			const formattedColor = value.startsWith("#") ? value : `#${value}`

			setLocalColor(formattedColor)
			onChange(formattedColor)
		}
	}

	return (
		<div className="containerColorPicker">
			<div className="title">{label}</div>
			<div className="choice">
				<input
					className="colorPicker"
					type="color"
					value={localColor}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleColorChange(2, e.target.value)
					}
				/>
				<div className="containerInput">
					<input
						className="inputColor"
						type="text"
						placeholder={localColor.substring(1)}
						id="name"
						name="name"
						required
						maxLength={6}
						value={localColor.substring(1)}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleColorChange(1, e.target.value)
						}
					/>
				</div>
			</div>
		</div>
	)
}
