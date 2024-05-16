import Modal from "@/components/Modal";
import { Dialogs } from "@/lib/features/modals/dialogs";
import { modalsSlice } from "@/lib/features/modals/modalsSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  return (
    <div className="border mx-8 my-8 px-8 py-4 flex flex-col gap-4 bg-stone-200 max-w-96 rounded-lg ">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        onClick={() =>
          dispatch(modalsSlice.actions.openModal({ dialogId: "one" }))
        }
      >
        Open Modal One
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        onClick={() =>
          dispatch(modalsSlice.actions.openModal({ dialogId: "two" }))
        }
      >
        Open Modal Two
      </button>
      {/* Uncomment next line to force mount a modal*/}
      {/* <Modal {...Dialogs['one']}></Modal> */}
      {/* <Modal {...Dialogs['two']}></Modal> */}
    </div>
  );
}
