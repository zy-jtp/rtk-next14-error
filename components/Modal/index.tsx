import { ModalConfig } from "@/lib/features/modals/ModalConfig.interface";
import { DialogId } from "@/lib/features/modals/dialog-ids.interface";
import { modalsSlice } from "@/lib/features/modals/modalsSlice";
import { Action, PayloadAction } from "@reduxjs/toolkit/react";
import React from "react";
import { useDispatch } from "react-redux";

export type ModalProps = {
  dialogId: DialogId;
  title: string;
  body: string;
  options: Array<{ action: PayloadAction | Action; label: string }>;
};
const Modal = ({ dialogId, title, body, options = [] }: ModalProps) => {
  const dispatch = useDispatch();

  const handleOptionClick = (action: PayloadAction | Action) => {
    dispatch(action);
    return () => dispatch(modalsSlice.actions.closeModal({ dialogId }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full z-10">
        <div className="flex p-4 justify-between w-full bg-stone-200 mb-4 rounded-t-lg">
          {title && <h2 className="text-xl font-bold ">{title}</h2>}
          <button
            onClick={() => {
              dispatch(modalsSlice.actions.closeModal({ dialogId }));
            }}
            className="top-2 right-2 text-gray-500 hover:text-gray-700 text-xl "
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          {body && <p className="mb-4">{body}</p>}
          <div className="flex justify-end space-x-2">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.action)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
