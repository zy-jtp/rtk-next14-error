import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { modalSelectors } from "../lib/features/modals/modalsSlice";
import Modal from "@/components/Modal";
import { useAppSelector } from "@/lib/redux/hooks";
import { Dialogs } from "@/lib/features/modals/dialogs";

type ReduxModalProviderProps = {
  children: ReactNode;
};
export const ModalProvider = (props: ReduxModalProviderProps) => {
  const modals = useAppSelector((state) => modalSelectors.selectAll(state.modals));
  console.log("🚀 ~ ModalProvider ~ modals:", modals)
  return (
    <>
      {modals.length > 0 &&
        modals.map((modal, key) => {
          return <Modal key={modal.dialogId} {...Dialogs[modal.dialogId]}></Modal>
        })}
      {props.children}
    </>
  );
};
