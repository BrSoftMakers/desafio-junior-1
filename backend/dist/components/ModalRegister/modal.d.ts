import { FC } from "react";
import { Pet } from "@/types";
interface ModalProps {
    onClose: () => void;
    onAddPet: (newPet: Pet) => void;
    petData?: Pet;
}
declare const Modal: FC<ModalProps>;
export default Modal;
