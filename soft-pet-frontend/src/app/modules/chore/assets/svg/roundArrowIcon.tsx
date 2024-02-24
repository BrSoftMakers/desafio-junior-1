import theme from "../../theme";

interface RoundArrowIconProps {
  direction?: string;
  w?: string
  m?: string
  variant?: boolean;
  disable?: boolean;

  onClick?: () => void;
}

const RoundArrowIcon = ({ ...props }: RoundArrowIconProps) => {
  let rotate = 0;

  switch (props.direction) {
    case "up":
      rotate += 0.3;
      break;
    case "right":
      rotate += 0.5;
      break;
    case "down":
      rotate += 0.7;
    default:
      rotate;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w ? props.w : "16"}
      height={props.w ? props.w : "16"}
      viewBox="0 0 16 16"
      style={{
        transform: `rotate(${rotate}turn)`,
        margin: props.m ? props.m : '8px',
        display: props.disable ? 'none' : 'inline',
        cursor: 'pointer',
      }}
      onClick={props.onClick}
    >
      <path
        fill= {props.variant ? theme.colors.light : 'url(#paint0_linear_126_5835)'}
        fillRule="evenodd"
        d="M8 0C3.583 0 0 3.583 0 8s3.583 8 8 8 8-3.583 8-8-3.583-8-8-8zM1.886 8A6.116 6.116 0 018 1.886 6.116 6.116 0 0114.114 8 6.116 6.116 0 018 14.114 6.116 6.116 0 011.886 8zm6.54-2.276a.943.943 0 00-1.338-1.328L4.17 7.336a.943.943 0 000 1.329l2.918 2.94a.943.943 0 001.339-1.328L7.104 8.944h4.057a.943.943 0 000-1.887H7.104l1.323-1.333z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_126_5835"
          x1="0"
          x2="16.001"
          y1="8.131"
          y2="8.131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00CAFC"></stop>
          <stop offset="1" stopColor="#0056E2"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RoundArrowIcon;
