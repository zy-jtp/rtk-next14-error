import {
  ListenerEffectAPI,
  TypedStartListening,
  addListener,
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "../store";

export const appListenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppListenerEffectApi = ListenerEffectAPI<RootState, AppDispatch>;

export const startAppListening = appListenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();
