import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";

export default function Alert({
    title,
    confirmActionMessage = `Are you sure? You can't undo this action afterwards.`,
    confirmActionButtonText = "Confirmar",
    cancelActionButtonText = "Cancelar",
    isOpen,
    onClose,
    onConfirm,
    cancelRef,
}) {
    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody>{confirmActionMessage}</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            {cancelActionButtonText}
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            ml={3}
                        >
                            {confirmActionButtonText}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}
