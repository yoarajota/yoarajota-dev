import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import NormalText from "./typography/normaltext";
import { LanguageContext } from "components/contexts/language";
import { GrFormClose } from "react-icons/gr";
import { Colors } from "asset/enums";

function Maintenance() {
  const { msg } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          exit={{ y: ["0px", "-200px"] }}
          animate={{
            y: ["-200px", "0px"],
            opacity: [0, 1],
            transition: { delay: 1 },
          }}
          className="maintenance-wrap"
        >
          <Box onClick={() => {
            setIsOpen(false);
          }}>
            <Box>
              <FiAlertTriangle />
            </Box>
            <NormalText customColor={Colors.Black}>{msg?.alert}</NormalText>
            <Box
              _hover={{ opacity: 0.6 }}

            >
              <GrFormClose />
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Maintenance;
