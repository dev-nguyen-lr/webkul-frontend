import React from 'react';
import styled from 'styled-components';

interface AlertProps {
  type: 'success' | 'error';
  children: React.ReactNode; // Replacing `message` with `children`
}

const AlertWrapper = styled.div<{ type: 'success' | 'error' }>`
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${(props) =>
    props.type === 'success' ? 'rgba(8, 155, 163, .1)' : 'rgba(253, 103, 104, .1)'};
  border: ${(props) =>
    props.type === 'success' ? '1px solid rgba(8, 155, 163)' : '1px solid rgba(253, 103, 104)'};
  color: ${(props) =>
    props.type === 'success' ? 'rgba(8, 155, 163)' : 'rgba(253, 103, 104)'};
`;

const StrongText = styled.strong`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Alert: React.FC<AlertProps> = ({ type, children }) => {
  return (
    <AlertWrapper type={type}>
      <StrongText>{type === 'success' ? '完了メッセージ:' : 'エラーメッセージ:'}</StrongText>
      {children}
    </AlertWrapper>
  );
};

export default Alert;
