import { Dayjs } from "dayjs";

interface iRemoveModal {
    open: boolean;
    onClose: () => void;
    petData: {
        id: string
        name: string
        animal: string
        race: string
        owner: string
        phone: string
        birthdate: Dayjs | null
    }
}

export default iRemoveModal