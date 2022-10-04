import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import Titles from '../typography/titles'

function ModalNavBar({ active, setActive }) {
    return (
        <>
            <Modal isOpen={active} onClose={setActive}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader backgroundColor="#0d0d0d" textAlign='center'>
                        <Titles customFontSize={30}>
                            Modal Title
                        </Titles>
                    </ModalHeader>
                    <ModalBody backgroundColor="#0d0d0d">
                    </ModalBody>

                    <ModalFooter backgroundColor="#0d0d0d">
                        {/* <Button backgroundColor="#0d0d0d" mr={3}>
                            Close
                        </Button > */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalNavBar;