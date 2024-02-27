import { FC } from "react";
import { Pet } from "@/types";
interface ModalRemoveProps {
    onClose: () => void;
    onRemoveItem: () => void;
    petData: Pet;
}
declare const ModalRemove: FC<ModalRemoveProps>;
export default ModalRemove;
