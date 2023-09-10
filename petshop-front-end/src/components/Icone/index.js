import React from 'react';
import { Link } from 'react-router-dom';

const icones = [
];

function IconesHeader() {
    return (
        <ul className="flex items-center flex-col">
            {icones.map((icone, index) => (
                <li className="mr-10 w-6" key={index}>
                    <Link to={icone.link}>
                        <img className="w-full h-auto" src={icone.image} alt="Ícone"/>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default IconesHeader;