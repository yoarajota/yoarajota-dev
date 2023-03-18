import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { Colors } from 'asset/enums';
import { ModalType } from 'asset/types';
import DOMPurify from "isomorphic-dompurify";
import NormalText from './typography/normaltext';
import Titles from './typography/titles';

function ModalWrap({ isOpen, onClose, data }: ModalType) {
    return (
        <Modal isOpen={isOpen} isCentered size='xl' onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={Colors.Black}>
                <ModalHeader><Titles size='esm'>{data?.title}</Titles></ModalHeader>
                <ModalCloseButton color={Colors.Orange} />
                <ModalBody>
                    <NormalText text={data?.text} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalWrap;