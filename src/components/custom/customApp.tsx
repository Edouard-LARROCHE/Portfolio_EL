import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../types/store.types"

import { setChangeColor, setChangeFont } from "../../store/slice/custom.slice"

import DraggablePop from "./components/draggablePop"
import Branded from "./components/branded"
import ColorPicker from "../colorPicker/colorPicker"

import "./customApp.scss"

const CustomApp = () => {
	const dispatch = useAppDispatch()

	const customAppDefault = useAppSelector((state) => state.custom)
	const [selectedFont, setSelectedFont] = useState(customAppDefault.font)

	useEffect(() => {
		setSelectedFont(customAppDefault.font)
	}, [customAppDefault.font])

	const handleColorChange = (
		colorKey:
			| "primaryColor"
			| "secondaryColor"
			| "buttonColor"
			| "snakeColor",
		value: string,
	) => {
		dispatch(setChangeColor({ colorKey, value }))
	}

	const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const font = event.target.value

		setSelectedFont(font)
		dispatch(setChangeFont({ fontKey: "font", value: font }))
	}

	return (
		<div className="customPopup">
			<DraggablePop>
				<Branded />
				<div className="containerActions">
					<div className="contentLeft">
						<div className="leftPicker">
							<ColorPicker
								color={customAppDefault.primaryColor}
								onChange={(color) =>
									handleColorChange("primaryColor", color)
								}
								label={"Primary"}
							/>
							<ColorPicker
								color={customAppDefault.secondaryColor}
								onChange={(color) =>
									handleColorChange("secondaryColor", color)
								}
								label={"Secondary"}
							/>
						</div>
						<div className="rightPicker">
							<ColorPicker
								color={customAppDefault.buttonColor}
								onChange={(color) =>
									handleColorChange("buttonColor", color)
								}
								label={"Button"}
							/>
							<ColorPicker
								color={customAppDefault.snakeColor}
								onChange={(color) =>
									handleColorChange("snakeColor", color)
								}
								label={"Snake"}
							/>
						</div>
					</div>
					<div className="contentRight">
						<div className="title">Font</div>
						<select
							value={selectedFont}
							onChange={handleFontChange}
						>
							<option value="Arial">Arial</option>
							<option value="Helvetica">Helvetica</option>
							<option value="Verdana">Verdana</option>
							<option value="Times New Roman">
								Times New Roman
							</option>
							<option value="Courier New">Courier New</option>
						</select>
					</div>
				</div>
			</DraggablePop>
		</div>
	)
}

export default CustomApp
