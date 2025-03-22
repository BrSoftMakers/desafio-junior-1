import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface iModalComponent {
  open: boolean;
  onClose: () => void;
  petData?: {
    id?: string
    name: string
    race: string
    animal: string
    owner: string
    phone: string
    birthdate: Dayjs | null
  };
  setFunctions?: {
    setName: Dispatch<SetStateAction<string>>
    setAnimal: Dispatch<SetStateAction<string>>
    setRace: Dispatch<SetStateAction<string>>
    setOwner: Dispatch<SetStateAction<string>>
    setPhone: Dispatch<SetStateAction<string>>
    setBirthdate: Dispatch<SetStateAction<Dayjs | null>>
  };
  handleFunction: () => Promise<void>;
  modalFunction: string;
}

export default iModalComponent;