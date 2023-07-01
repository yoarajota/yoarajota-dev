import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
} from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ModalType } from "asset/types";
import { ClientContext } from "./contexts/client";
import NormalText from "./typography/normalText";
import Titles from "./typography/titles";
import { useContext } from "react";

function ModalWrap({ isOpen, onClose, data }: ModalType) {
    const { msg} = useContext(ClientContext);

  return (
    <Modal isOpen={isOpen} isCentered size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={Colors.Black}>
        <ModalHeader>
          <Titles size="esm" text={data?.title} />
        </ModalHeader>
        <ModalCloseButton color={Colors.Orange} />
        <ModalBody>
          <NormalText text={data?.text} />
        </ModalBody>
      </ModalContent>
      {data.href && (
        <ModalFooter>
          <Link href={data.href} isExternal>
            {msg?.modal_footer_button}
          </Link>
        </ModalFooter>
      )}
    </Modal>
  );
}

export default ModalWrap;
