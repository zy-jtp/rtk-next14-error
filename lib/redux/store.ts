import { configureStore } from "@reduxjs/toolkit";
import { appListenerMiddleware } from "./middleware/listener.config";
import { pokemonApi } from "../features/api/apiSlice";
import { modalsSlice } from "../features/modals/modalsSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [modalsSlice.reducerPath]: modalsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .prepend(appListenerMiddleware.middleware)
      .concat(pokemonApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
