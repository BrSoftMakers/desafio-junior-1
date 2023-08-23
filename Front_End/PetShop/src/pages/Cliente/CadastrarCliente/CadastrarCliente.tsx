import React, { useEffect, useState } from 'react';

import * as Yup from 'yup';

import styles from './CadastrarCliente.module.css';
import Input from '../../../components/forms/Input/Input';

import Form from '../../../components/forms/Form/Form';
import Button from '../../../components/forms/Button';

import { Cliente, createOrUpdateCliente } from '../../../services/clienteService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pet, getPet } from '../../../services/petService';
import { Field } from 'formik';

const CadastrarCliente: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const cliente = location.state as Cliente;
    const [pets, setPets] = useState<Pet[]>([]);
    const [valueNumero, setValuesNumero] = useState('');


    const initialValues: Cliente = {
        id: 0,
        nome: '',
        numero_contato: '',
        endereco: '',
        nome_pet: ''
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo obrigatório'),
        numero_contato: Yup.string().required('Campo obrigatório'),
        endereco: Yup.string().required('Campo obrigatório'),
        nome_pet: Yup.string().required('Campo obrigatório'),
    });

    const fetchPets = async () => {
        try {
            const pets = await getPet();
            setPets(pets);
        } catch (error) {
            console.log('Erro ao buscar Pets', error);
        }
    }

    useEffect(() => {
        fetchPets();
    }, []);

    const onSubmit = async (values: Cliente, { resetForm }: { resetForm: () => void }) => {
        try {
            createOrUpdateCliente(values);
            console.log(values);
            resetForm();
            navigate('/listagem/cliente');
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
                    initialValues={cliente || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <>
                            <h2>Cadastro do cliente</h2>

                            <Input
                                label="Nome"
                                name="nome"
                                required
                                errors={errors.nome}
                                touched={touched.nome}
                            />
                            <Input
                                label="Numero de Contato"
                                name="numero_contato"
                                type='tel'
                                placeholder='(xx)9xxxx-xxxx'
                                pattern='\(\d{2}\)\d{4,5}-\d{4}$'
                                required
                                errors={errors.numero_contato}
                                touched={touched.numero_contato}
                            />
                            <Input
                                label="Endereço"
                                name="endereco"
                                required
                                errors={errors.endereco}
                                touched={touched.endereco}
                            />
                            <div className={styles.formGroup}>
                                <label className={styles.label}>
                                    Nome do Pet:
                                </label>
                                <Field as='select' name="nome_pet" id="nome_pet" className={styles.input}>
                                    {pets.map((itemPet) => (
                                        <option value={itemPet.id}>{itemPet.nome}</option>
                                    ))}
                                </Field>
                            </div>

                            <Button
                                type='submit'
                            >
                                Cadastrar
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </main>
    )
}

export default CadastrarCliente;