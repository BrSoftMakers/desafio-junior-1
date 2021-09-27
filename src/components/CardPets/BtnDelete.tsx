import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';

import { deletePet } from '../../service/petsService';

interface Props {
  id: number;
  refresh: () => void;
}

export const BtnDelete = ({ id, refresh }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hidden = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      {hidden ? (
        <IconButton
          bg="red.100"
          ml={2}
          _hover={{ bg: 'red.200' }}
          aria-label="Search database"
          icon={<DeleteIcon />}
          title="Deletar cadastro"
          onClick={() => {
            onOpen();
          }}
        />
      ) : (
        <Button
          bg="red.100"
          _hover={{ bg: 'red.200' }}
          leftIcon={<DeleteIcon />}
          title="Deletar cadastro"
          onClick={onOpen}
          isFullWidth
          mt={3}
        >
          Deletar
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deletar Pet</ModalHeader>
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Tem certeza que deseja deletar esse pet da base de dados?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Button
              bg="red.100"
              _hover={{ bg: 'red.200' }}
              mr={3}
              onClick={() => {
                deletePet(id);
                refresh();
              }}
            >
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
