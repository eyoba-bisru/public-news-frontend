import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";

type Props = {
  placeholder: string;
};

function PasswordInput({ placeholder }: Props) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        borderColor="#4C230A"
        _focus={{ border: "none" }}
      />
      <InputRightElement width="4.5rem" _hover={{ cursor: "pointer" }}>
        <AiFillEye
          onClick={() => setShow(true)}
          className={`${show ? "hidden" : "inline-block"} text-primary`}
        />
        <AiFillEyeInvisible
          onClick={() => setShow(false)}
          className={`${show ? "inline-block" : "hidden"} text-primary`}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
