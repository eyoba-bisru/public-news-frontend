import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";

type Props = {
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
};

function PasswordInput({ handleBlur, handleChange, name, value }: Props) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <InputLeftElement pointerEvents="none">
        <BsKeyFill color="#4C230A" />
      </InputLeftElement>

      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Password"
        borderColor="#4C230A"
        _focus={{ border: "none" }}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
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
