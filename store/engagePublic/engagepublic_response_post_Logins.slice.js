import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const engagepublic_post_apih2_login_create = createAsyncThunk(
  "engagepublic_response_post_Logins/engagepublic_post_apih2_login_create",
  async payload => {
    const response = await apiService.engagepublic_post_apih2_login_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const engagepublic_response_post_LoginsSlice = createSlice({
  name: "engagepublic_response_post_Logins",
  initialState,
  reducers: {},
  extraReducers: {
    [engagepublic_post_apih2_login_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [engagepublic_post_apih2_login_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [engagepublic_post_apih2_login_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  engagepublic_post_apih2_login_create,
  slice: engagepublic_response_post_LoginsSlice
}
