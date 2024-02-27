import { AddIcon, EditIcon, TrashIcon } from "../../../assets/svg";

const modalConfig = {
    'Create': {
        title: 'Cadastrar',
        icon: <AddIcon w="40" />,
        buttonIcon: <AddIcon />,
        actionButtonVariant: 'PRIMARY',
        disableButton: false
    },
    'Delete': {
        title: 'Remover',
        icon: <TrashIcon w='42' h="40"/>,
        buttonIcon: <TrashIcon />,
        actionButtonVariant: 'DANGER',
        disableButton: true
    },
    'Edit': {
        title: 'Editar',
        icon: <EditIcon w='39' variant/>,
        buttonIcon: <EditIcon variant/>,
        actionButtonVariant: 'PRIMARY',
        disableButton: false
    }
};

export default modalConfig