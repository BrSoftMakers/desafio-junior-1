import { Pet } from "../../../models/pet";
import { formatDate } from "date-fns";

const formatInputValues = (petData: Pet) => {
    const petType = petData.petTypeId === 1 ? 'DOG' : 'CAT';
    const formatedBirth = formatDate(petData.birth, "yyyy-MM-dd")

    return({
        name: petData.name,
        ownerName: petData.ownerName,
        ownerPhone: petData.ownerPhone,
        petType: petType,
        breed: petData.breed,
        birth: formatedBirth
    })
}

export default formatInputValues