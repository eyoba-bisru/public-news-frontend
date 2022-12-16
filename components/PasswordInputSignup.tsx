import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  placeholder: string;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
};

function PasswordInput({
  placeholder,
  handleChange,
  value,
  name,
  handleBlur,
}: Props) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        name={name}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        borderColor="#4C230A"
        _focus={{ border: "none" }}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
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

export default React.memo(PasswordInput);
