import iRemoveModal from "./iRemoveModal";
import ModalComponent from "../Modal";

export default function RemovePetModal({
  open,
  onClose,
  petData,
}: iRemoveModal) {
  const handleRemove = async () => {
    try {
      const response = await fetch(`http://localhost:3001/pets/${petData.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        onClose();
      } else {
        console.error("Erro ao deletar pet:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao deletar pet:", error);
    }
  };
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      petData={petData}
      handleFunction={handleRemove}
      modalFunction={"Remover"}
    />
  );
}
