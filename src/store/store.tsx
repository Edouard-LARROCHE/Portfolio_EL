import { configureStore } from "@reduxjs/toolkit"

import globalSlice from "./slice/global.slice"
import customSlice from "./slice/custom.slice"

export const store = configureStore({
	reducer: {
		global: globalSlice,
		custom: customSlice,
	},
})
