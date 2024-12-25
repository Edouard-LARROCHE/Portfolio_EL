import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ChangeColorPayload {
	colorKey: "primaryColor" | "secondaryColor" | "buttonColor" | "snakeColor"
	value: string
}

interface ChangeFontPayload {
	fontKey: "font"
	value: string
}

export const customSlice = createSlice({
	name: "custom",
	initialState: {
		primaryColor: "#6EE7B7",
		secondaryColor: "#F6F7FE",
		buttonColor: "#5046E5",
		snakeColor: "#1779ff",
		font: "",
	},
	reducers: {
		setChangeColor: (state, action: PayloadAction<ChangeColorPayload>) => {
			state[action.payload.colorKey] = action.payload.value
		},
		setChangeFont: (state, action: PayloadAction<ChangeFontPayload>) => {
			state[action.payload.fontKey] = action.payload.value
		},
		setReset: (state) => {
			state.primaryColor = "#6EE7B7"
			state.secondaryColor = "#F6F7FE"
			state.buttonColor = "#5046E5"
			state.snakeColor = "#1779ff"
			state.font = "Arial"
		},
	},
})

export const { setChangeColor, setChangeFont, setReset } = customSlice.actions
export default customSlice.reducer
