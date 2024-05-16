import { DialogId } from "../dialog-ids.interface";
import { modalsSlice } from "../modalsSlice";

export const DialogOne = {
  dialogId: "one" as DialogId,
  body: "Hello I'm dialog one.",
  title: "Dialog One",
  options: [
    {
      label: "Close",
      action: modalsSlice.actions.closeModal({ dialogId: "one" }),
    },
  ],
};
export const DialogTwo = {
  dialogId: "two" as DialogId,
  body: "Hello I'm dialog two.",
  title: "Dialog Two",
  options: [
    {
      label: "Close",
      action: modalsSlice.actions.closeModal({ dialogId: "two" }),
    },
  ],
};

export const Dialogs = {
  [DialogOne.dialogId]: DialogOne,
  [DialogTwo.dialogId]: DialogTwo,
};
