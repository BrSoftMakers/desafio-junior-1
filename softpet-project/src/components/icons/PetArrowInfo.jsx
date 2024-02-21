import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.08 11.08a1.502 1.502 0 0 1-2.124 0L.46 2.584A1.502 1.502 0 1 1 2.583.459l7.435 7.435L17.454.46a1.502 1.502 0 0 1 2.124 2.124l-8.497 8.498Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
