import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface IProps {
  children: ReactNode
  onClose(): void
  isModalOpen: boolean
}

function Modal(props: IProps) {

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

        <div className="relative inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <MdClose onClick={props.onClose} className="absolute right-2 top-1" />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
