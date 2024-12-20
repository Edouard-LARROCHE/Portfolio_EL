import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
	name: "global",
	initialState: {
		customPopup: false,
	},
	reducers: {
		setCustomPopup: (state, action) => {
			state.customPopup = action.payload
		},
	},
})

export const { setCustomPopup } = globalSlice.actions
export default globalSlice.reducer

