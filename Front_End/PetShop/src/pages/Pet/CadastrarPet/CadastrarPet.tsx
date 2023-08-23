import React from 'react';

import * as Yup from 'yup';

import styles from './CadastrarPet.module.css';
import Input from '../../../components/forms/Input/Input';

import Form from '../../../components/forms/Form/Form';
import Button from '../../../components/forms/Button';

import { Pet, createOrUpdatePet } from '../../../services/petService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Field } from 'formik';


const CadastrarPet: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const pet = location.state as Pet;

    const initialValues: Pet = {
        id: 0,
        nome: '',
        idade: 0,
        tipo: '',
        raca: ''
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        idade: Yup.number().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        raca: Yup.string().required('Campo obrigatório'),
    });


    const onSubmit = async (values: Pet, { resetForm }: { resetForm: () => void }) => {
        try {
            createOrUpdatePet(values);
            resetForm();
            if(!values.id) {
                navigate('/cadastro/cliente');
            }else {
                navigate('/listagem/pet');
            }
            alert('Formulario enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário!');
        }

    };

    return (
        <main>
            <div className={styles.container}>
                <Form
                    initialValues={pet || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <>
                            <h2>Cadastro de pet's</h2>
                            <Input
                                label="Nome"
                                name="nome"
                                required
                                errors={errors.nome}
                                touched={touched.nome}
                            />

                            <Input
                                label="Idade"
                                name="idade"
                                type='number'
                                required
                                errors={errors.idade}
                                touched={touched.idade}
                                placeholder='Idade em meses'
                            />

                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Nome do Pet:
                                </label>
                                <Field as='select' name="tipo" id="tipo" className={styles.input}>
                                    <option value="cachorro">Cachorro</option>
                                    <option value="gato">Gato</option>
                                </Field>
                            </div>

                            <Input
                                label="Raça"
                                name="raca"
                                required
                                errors={errors.raca}
                                touched={touched.raca}
                            />
                            <Button
                                type='submit'
                            >
                                Cadastrar
                            </Button>
                        </>
                    )}
                </Form>
            </div >
        </main >
    )
}

export default CadastrarPet;