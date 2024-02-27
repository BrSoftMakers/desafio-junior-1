
const SearchIcon = ({ ...props }: any) => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={props.color? props.color : "#001E4D" }
        d="M8.79 15.38a6.593 6.593 0 100-13.184 6.593 6.593 0 000 13.185zm6.942-1.201l3.933 3.933A1.1 1.1 0 0118.891 20a1.099 1.099 0 01-.78-.336l-3.933-3.933a8.789 8.789 0 111.553-1.553h.001z"
      ></path>
    </svg>
    )
}

export default SearchIcon