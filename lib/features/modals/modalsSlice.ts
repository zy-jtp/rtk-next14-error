import { ModalConfig } from "./ModalConfig.interface";
import { DialogId } from "./dialog-ids.interface";
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const Modal = createEntityAdapter<ModalConfig, DialogId>({
  selectId: (modal) => modal.dialogId,
});

export const modalSelectors = Modal.getSelectors();

export const modalsSlice = createSlice({
  name: "modals",
  initialState: Modal.getInitialState(),
  reducers: {
    openModal(
      state,
      action: PayloadAction<ModalConfig & { stackOnTop?: true }>
    ) {
      if (!action.payload.stackOnTop) Modal.removeAll(state);
      Modal.upsertOne(state, action.payload);
    },
    closeModal(
      state,
      action: PayloadAction<{ dialogId: ModalConfig["dialogId"] }>
    ) {
      Modal.removeOne(state, action.payload.dialogId);
    },
    updateModal(state, action: PayloadAction<ModalConfig>) {
      Modal.updateOne(state, {
        id: action.payload.dialogId,
        changes: action.payload,
      });
    },
    resetModals(state) {
      Modal.removeAll(state);
    },
  },
});
