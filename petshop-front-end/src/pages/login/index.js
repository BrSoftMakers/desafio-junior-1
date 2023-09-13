import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { IMaskInput } from 'react-imask';
import cachorro from '../../img/Dog_paw-amico.png';
import logo from '../../img/logonav (1).png';
import ShowPasswordImg from '../../img/ShowPasswordImg 1.png';
import HidePasswordImg from '../../img/HidePasswordImg 1.png';

/**
 * Componente de login para autenticar usuários.
 */
const Login = () => {
    // Estado para controlar mensagens de erro
    const [error, setError] = useState('');
    // Estado para controlar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);

    // Utiliza o Formik para gerenciar o estado do formulário
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        // Validação de campos usando Yup
        validationSchema: Yup.object({
            name: Yup.string().required('Obrigatório'),
            password: Yup.string()
                .min(6, 'Mínimo de 6 caracteres')
                .required('Obrigatório'),
        }),

        // Função a ser executada quando o formulário for enviado
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost/user/login', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Após autenticação bem-sucedida em seu componente de Login
                if (response.status === 200) {
                    const token = response.data.token.token;
                    const userId = response.data.token.userId;
                    Cookies.set('token', token, { sameSite: 'strict' });
                    Cookies.set('userId', userId, { sameSite: 'strict' });
                    window.location.href = '/';
                } else if (response.status === 401) {
                    // Exibe uma mensagem de erro se as credenciais forem inválidas
                    setError('Usuário ou senha incorretos');
                } else {
                    // Exibe uma mensagem de erro genérica para outros erros
                    setError('Falha no servidor. Por favor, tente novamente mais tarde.');
                }
            } catch (error) {
                console.error('Erro na solicitação de autenticação', error);
                // Exibe uma mensagem de erro genérica se ocorrer um erro na solicitação
                setError('Ocorreu um erro na solicitação de autenticação');
            }
        },
    });

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className='flex font-bold'>

            <div className='hidden md:flex md:w-[80rem] md:mx-auto md:items-center md:justify-center'>

                <img
                    src={cachorro}
                    alt='imagem de login'
                    className='w-[500px] h-auto'
                />
            </div>

            <div className='w-full xl:w-1/2 flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full max-w-[27rem] bg-#0588D1 h-screen'>
                    <img
                        src={logo}
                        alt='imagem de login'
                        className='w-[300px] h-auto -mt-36'
                    />
                    <div className='text-center'>
                        <h1 className='text-white text-3xl font-bold mt-5'>Login de usuários</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col p-4'>

                        <div className="">
                            <label
                                className="flex p-1 pl-3 flex-col justify-center flex-shrink-0 text-xl font-bold text-gray-200">
                                Nome:
                            </label>
                            <IMaskInput
                                className="flex px-8 py-2 h-12 rounded-xl bg-gray-200 text-center font-medium"
                                id="name"
                                name="name"
                                type="text"
                                placeholder=""
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className='text-red-500'>{formik.errors.name}</div>
                            ) : null}

                            <div className='relative'>
                                <label
                                    className="flex p-1 pl-3 flex-col justify-center flex-shrink-0 text-xl font-bold text-gray-200">
                                    Senha:
                                </label>
                                <div className='relative'>
                                    <input
                                        className="flex px-8 py-2 h-12 rounded-xl bg-gray-200 text-center font-medium"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder=""
                                        {...formik.getFieldProps('password')}
                                    />
                                    <img
                                        src={showPassword ? HidePasswordImg : ShowPasswordImg}
                                        alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                        className="absolute right-2 top-1/3 transform mr-6 mt-2 -translate-y-1/2 cursor-pointer h-6"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='text-red-500'>{formik.errors.password}</div>
                                ) : null}
                            </div>

                            <div className='flex justify-center mt-8 xl:mt-28'>
                                <button
                                    className="m-0 flex-shrink-0 bg-#00CD93 hover:bg-blue-400 hover:text-black text-white py-2 px-10 rounded-xl"
                                    type="submit"
                                >
                                    Entrar
                                </button>
                            </div>

                            <a href='#' className='flex justify-center text-gray-200 mt-3 hover:text-white'>
                                Esqueci minha senha
                            </a>

                            {error && (
                                <p className="text-red-500 mt-2 text-center">
                                    <svg className="w-6 h-6 text-red-500 dark:red-500" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
                                    </svg>
                                    {error}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;