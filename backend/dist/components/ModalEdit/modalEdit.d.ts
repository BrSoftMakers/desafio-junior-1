import { FC } from "react";
import { Pet } from "@/types";
interface ModalEditProps {
    petData: Pet;
    onClose: () => void;
    onEditItem: (editedPet: Pet) => void;
    petsPerPage: number;
    setCurrentPage: (pageNumber: number) => void;
    pets: Pet[];
}
declare const ModalEdit: FC<ModalEditProps>;
export default ModalEdit;
