import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    //  Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,

    // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
