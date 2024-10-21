import React from 'react';
import styled from 'styled-components';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const AlertWrapper = styled.div<{ type: 'success' | 'error' }>`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${(props) =>
    props.type === 'success' ? '#d1e7dd' : '#f8d7da'};
  border: ${(props) =>
    props.type === 'success' ? '1px solid #0f5132' : '1px solid #842029'};
  color: ${(props) =>
    props.type === 'success' ? '#0f5132' : '#842029'};
`;

const AlertText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const StrongText = styled.strong`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <AlertWrapper type={type}>
      <StrongText>{type === 'success' ? '完了メッセージ:' : 'エラーメッセージ:'}</StrongText>
      <AlertText>{message}</AlertText>
    </AlertWrapper>
  );
};

export default Alert;
