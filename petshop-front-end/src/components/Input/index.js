import React from "react";

function Input({ className, handleSearch, ...rest }) {
    return <input className={className} onChange={handleSearch} {...rest} />;
}

export default Input;