import { Box, FormControl, Input, Spinner } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { keyable } from "asset/types";
import DButton from "components/typography/dButton";
import { useCallback, useState } from "react";
import api from "../../api/axios"

const ModalForm = ({ onClose }: keyable) => {
    const [credentials, setCredentials] = useState<keyable>({
        email: "",
        password: "",
        loading: false,
    });
    const login = useCallback(async () => {
        setCredentials((prev) => ({ ...prev, loading: true }));
        await api
            .post("api/login", credentials)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    onClose();
                }
            })
            .catch((error) => { });
        setCredentials((prev) => ({ ...prev, loading: false }));
    }, [credentials, onClose]);

    return (
        <FormControl
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="1em"
        >
            <Input
                color={Colors.Gray}
                placeholder="Email"
                variant="unstyled"
                value={credentials.email}
                onChange={(e) =>
                    setCredentials((prev) => ({ ...prev, email: e.target.value }))
                }
            />
            <Input
                color={Colors.Gray}
                type="password"
                placeholder="Password"
                variant="unstyled"
                value={credentials.password}
                onChange={(e) =>
                    setCredentials((prev) => ({ ...prev, password: e.target.value }))
                }
            />
            <Box h="40px">
                {credentials.loading ? (
                    <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
                ) : (
                    <DButton
                        customFontSize="0.9rem"
                        onClick={login}
                        type="submit"
                        text="Submit"
                    />
                )}
            </Box>
        </FormControl>
    );
};

export default ModalForm;