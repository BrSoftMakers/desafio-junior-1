import NavBar from "../NavBar"
import {getUser} from '../../../services/user';
import Cookies from 'js-cookie';
import {useEffect, useState} from "react";
import userImage from '../../../img/user_3177440.png';

function Header({title}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userId = parseInt(Cookies.get('userId'));
            // console.log('User ID:', userId); // Adicione esta linha para depuração
            // Verifique se userId é um número válido antes de fazer a solicitação
            if (!isNaN(userId)) {
                const users = await getUser(userId);
                setUser(users);
                // console.log('Nome do usuário:', users.dataUser.name);
            } else {
                // console.error('ID do usuário não é um número válido.');
            }
        } catch (error) {
            console.error('Erro ao obter os usuários:', error);
        }
    };
    return (
        <>
            <div className="grid grid-cols-[13rem_auto] items-start h-full">
                <NavBar/>
                <header className="bg-gray-200 flex justify-between h-20 p-0 3rem ">

                    <div className="bg-gray-200 w-full h-20 flex items-center">
                        <h1 className="text-#0588D1 text-[35px] ml-3 font-medium">{title}</h1>
                    </div>
                    <div className="flex items-center justify-center text-#0588D1 gap-6 text-[35px]">
                        {user ? (
                            <>
                                <h3>{user.dataUser.name}</h3>
                                <span
                                    className="flex justify-center w-9 h-9 ml-3 bg-white rounded-full border border-gray-300 overflow-hidden">
                                <img src={userImage} className="w-6.3 pt-0.1" alt="Imagem do Usuário"/>
                            </span>
                            </>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </div>

                </header>
            </div>
        </>
    )
}

export default Header;