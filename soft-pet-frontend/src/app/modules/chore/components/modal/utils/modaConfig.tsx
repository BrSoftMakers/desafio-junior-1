import { AddIcon, EditIcon, TrashIcon } from "../../../assets/svg";

const modalConfig = {
    'Create': {
        title: 'Cadastrar',
        icon: <AddIcon w="40" />,
        buttonIcon: <AddIcon />,
        actionButtonVariant: 'PRIMARY',
        disableButton: false,
        notifyText: 'Pet cadastrado com sucesso'
    },
    'Delete': {
        title: 'Remover',
        icon: <TrashIcon w='42' h="40"/>,
        buttonIcon: <TrashIcon />,
        actionButtonVariant: 'DANGER',
        disableButton: true,
        notifyText: 'Pet removido com sucesso'
    },
    'Edit': {
        title: 'Editar',
        icon: <EditIcon w='39' variant/>,
        buttonIcon: <EditIcon variant/>,
        actionButtonVariant: 'PRIMARY',
        disableButton: false,
        notifyText: 'Pet editado com sucesso'
    }
};

export default modalConfig