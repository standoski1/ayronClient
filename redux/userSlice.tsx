import { GetBodyData, PostBodyData } from "@/types/product";
import { axiosInstance } from "@/utils/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const callPost = createAsyncThunk(
  "user/callPost", // Unique action type
  async (invokeData: PostBodyData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance({
        method: "POST",
        url: `/${invokeData.endpoint}`,
        headers: invokeData.header,
        data: invokeData.body,
      });
      return res.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response?.data &&
          error.response?.data?.message) ||
        error.message ||
        error?.toString();
      return rejectWithValue(message);
    }
  }
);

export const callGet = createAsyncThunk(
  "user/callGet", // Unique action type
  async (invokeData: GetBodyData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance({
        method: "GET",
        url: `/${invokeData.endpoint}`,
        headers: invokeData.header,
      });
      return res.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response?.data &&
          error.response?.data?.message) ||
        error.message ||
        error?.toString();
      return rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    accessToken: "",
    userDetails: [],
    postLoading: false,
    errorMessage: "",
  },
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
    LogoutUser: (state) => {
      state.accessToken = "";
      window.location.replace("/auth/signin");
      state.userDetails = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(callPost.pending, (state) => {
        state.postLoading = true;
        state.errorMessage = "";
      })
      .addCase(callPost.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.postLoading = false;
        window.location.replace("/");
        state.accessToken = action?.payload?.token;
      })
      .addCase(callPost.rejected, (state, action: any) => {
        state.postLoading = false;
        state.errorMessage = action?.payload;
      })
      .addCase(callGet.pending, (state) => {
        state.postLoading = true;
        state.errorMessage = "";
      })
      .addCase(callGet.fulfilled, (state, action) => {
        state.errorMessage = "";
        state.postLoading = false;
        state.userDetails = action?.payload;
        state.userData = action?.payload?.data;
      })
      .addCase(callGet.rejected, (state, action: any) => {
        state.postLoading = false;
        state.errorMessage = action?.payload;
      });
  },
});

export const { updateUser, LogoutUser } = userSlice.actions;
export default userSlice.reducer;
