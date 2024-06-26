import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import globalReducer from "./global";
import authReducer from "./auth/index";

const store: any = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
