import * as yup from "yup";


let formSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    ownerName: yup.string().required('Dono é obrigatório'),
    ownerPhone: yup.string().matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone Invalido').required('Telefone é obrigatório'),
    petType: yup.string().required('Tipo do animal é obrigatório'),
    breed: yup.string().required('Raça é obrigatório'),
    birth: yup.date().required('Nascimento é obrigatório'),
})


export default formSchema;
