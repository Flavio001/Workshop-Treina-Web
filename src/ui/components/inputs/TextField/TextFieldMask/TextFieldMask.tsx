import React from 'react'
import InputMask from 'react-input-mask'
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";
import {OutlinedTextFieldProps} from '@material-ui/core'

export interface TextFieldMaskProps extends OutlinedTextFieldProps{
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({mask, value, onChange,...props}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextFieldStyled></TextFieldStyled>;
      }}
    </InputMask>
  );
};
export default TextFieldMask;