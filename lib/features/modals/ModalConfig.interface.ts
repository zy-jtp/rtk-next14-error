import { Action, PayloadAction } from "@reduxjs/toolkit/react";
import { DialogId } from "./dialog-ids.interface";

export type ModalConfig = {
  closeable?: boolean;
  dialogId: DialogId;
  title?: string;
  body?: string;
  options?: {
    /**This redux action should be dispatched after option is selected */
    action: PayloadAction | Action;
    label: string;
  }[];
};
