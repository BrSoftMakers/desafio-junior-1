import React from 'react';
import { Link } from 'react-router-dom';
import Animais from '../../img/pata2.png';
import PESSOA from '../../img/ICON - PESSOA.png';
import HOME from '../../img/ICON - HOME.png';
import AnimalPage from '../../pages/Pet/Animal/index';

const opcoes = [
    { texto: 'Home', link: '/', imagem: HOME, submenu: [] },
    { texto: 'Usuários', link: '/editar', imagem: PESSOA, submenu: [] },
    { texto: 'Animais', link: '/AnimalPage', imagem: Animais, submenu: [] },
];

function OpcoesHeader() {
    return (
        <ul className="relative list-none -pt-[100px]  flex-col items-start flex content-center justify-start 2xl:pb-96 Mm:pb-35rem">
            {opcoes.map((opcao) => (
                <li className="text-base flex flex-col items-center justify-center text-center h-1/3 px-2.5 cursor-pointer min-w-120" key={opcao.texto}>
                    <Link to={opcao.link} className="text-white no-underline py-2 px-4 rounded transition duration-300 hover:bg-gray-100 hover:text-black">
                        <span className="flex items-center">
                            <img src={opcao.imagem} alt={opcao.texto} className="mr-2 w-5 m-0" />
                            <p className='m-0'>{opcao.texto}</p>
                        </span>
                    </Link>
                    {/* Submenu engatilhado (ainda vazio) */}
                    {opcao.submenu && opcao.submenu.length > 0 && (
                        <ul className="mt-2 ml-4"> {/* Adapte a classe CSS para o estilo desejado */}
                            {/* Mapeie aqui as opções do submenu */}
                            {/* Exemplo: */}
                            {/* <li>
                                <Link to="/editar/usuario" className="text-gray-500 hover:text-black">
                                    Editar Usuário
                                </Link>
                            </li> */}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default OpcoesHeader;