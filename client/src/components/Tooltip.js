import ReactTooltip from "react-tooltip";

function Tooltip({ place = "top", effect = "solid", ...rest }) {
  return (
    <ReactTooltip
      place={place}
      effect={effect}
      backgroundColor="#F50057"
      {...rest}
    />
  );
}

export default Tooltip;
