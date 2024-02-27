interface AddIconInterface {
  w?: string
}

const AddIcon = ({ ...props }: AddIconInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w ? props.w : "20"}
      height={props.w ? props.w : "20"}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm10-8a8 8 0 100 16 8 8 0 000-16z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11 5a1 1 0 00-2 0v4H5a1 1 0 000 2h4v4a1 1 0 102 0v-4h4a1 1 0 000-2h-4V5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default AddIcon;
