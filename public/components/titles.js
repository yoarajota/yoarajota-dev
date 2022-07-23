import { Heading } from "@chakra-ui/react";

function Titles({ children }) {
    return (
        <>
            <Heading color='#D99E6A' fontSize='48px' fontFamily='Ubuntu' m='0px'>
                {children}
            </Heading>
        </>
    );
}

export default Titles;