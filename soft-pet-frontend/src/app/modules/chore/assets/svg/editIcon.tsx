import theme from "../../theme";

interface EditIconInterface {
  variant?: boolean
  w?: string
}

const EditIcon = ({ ...props }: EditIconInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ props.w ? props.w :'16' }
      height={ props.w ? props.w : '16' }
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill= {props.variant ? theme.colors.light : theme.colors.blue300}
        fillRule="evenodd"
        d="M13.272-.008a2.73 2.73 0 00-1.93.798v.001l-1.033 1.03a1.01 1.01 0 00-.242.24L4.412 7.697a1 1 0 00-.294.708v2.471a1 1 0 001 1H7.59a1 1 0 00.708-.294l5.635-5.654a1.01 1.01 0 00.241-.243l1.03-1.032V4.65a2.73 2.73 0 00-1.93-4.66zM6.118 8.82l4.775-4.758 1.038 1.039-4.757 4.774H6.118V8.82zm6.191-6.17l1.034 1.034.444-.445.001-.002a.73.73 0 10-1.032-1.032l-.001.002-.446.444zm-9.662.636A2.647 2.647 0 000 5.934v7.412a2.647 2.647 0 002.647 2.647h7.413a2.647 2.647 0 002.647-2.647v-.823a1 1 0 10-2 0v.823a.647.647 0 01-.647.647H2.647A.647.647 0 012 13.346V5.934a.647.647 0 01.647-.648h.824a1 1 0 000-2h-.824z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_125_3670"
          x1="0"
          x2="16.002"
          y1="8.124"
          y2="8.124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00CAFC"></stop>
          <stop offset="1" stopColor="#0056E2"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EditIcon;
