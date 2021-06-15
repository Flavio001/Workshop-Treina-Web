import React from 'react'
import InputMask from 'react-input-mask'
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";
import {OutlinedTextFieldProps} from '@material-ui/core'

export interface TextFieldMaskProps extends OutlinedTextFieldProps{
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = (props) => {
  return (
    <InputMask mask={props.mask}>
      {() => {
        return <TextFieldStyled></TextFieldStyled>;
      }}
    </InputMask>
  );
};
export default TextFieldMask;