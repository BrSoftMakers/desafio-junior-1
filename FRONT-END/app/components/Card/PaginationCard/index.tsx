import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

type FooterI = {
  handleNext: () => void;
  handlePrev: () => void;
  page: number;
};
const PaginationCard = ({ handleNext, handlePrev, page }: FooterI) => {
  return (
    <footer className="absolute bottom-0 right-0 mb-10 mr-10 footer">
      <div className="flex items-center gap-2">
        <button onClick={handlePrev}>
          <BsArrowLeftCircle size={20} color="#FFF" />
        </button>
        <p className="text-colorText">{page}</p>
        <button onClick={handleNext}>
          <BsArrowRightCircle size={20} color="#FFF" />
        </button>
      </div>
    </footer>
  );
};

export default PaginationCard;
