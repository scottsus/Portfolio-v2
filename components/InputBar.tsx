import React from 'react';
import styled from 'styled-components';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { small } from '../styles/responsive';

interface IInputBar {
  formOnSubmit: (event: React.FormEvent) => void;
  placeholder?: string;
  margin?: string;
}

export default function InputBarComponent({
  formOnSubmit,
  placeholder,
  margin,
}: IInputBar) {
  return (
    <Form onSubmit={formOnSubmit} style={{ margin: margin }}>
      <InputBar name='comment' type='text' placeholder={placeholder} />
      <SubmitButton type='submit'>
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ fontSize: '18px', color: '#222632' }}
        />
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin: 15px 0 20px 10px;
  padding: 0 3px;

  @media (${small}) {
    width: 85%;
  }
`;

const InputBar = styled.input`
  width: 310px;
  height: 40px;
  background-color: transparent;
  padding: 0 10px;
`;

const SubmitButton = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 5px;
  background-color: #758ad3;
`;
