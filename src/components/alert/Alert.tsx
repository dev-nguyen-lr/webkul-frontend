import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClass =
    type === 'success'
      ? 'bg-blue-100 border border-blue-500 text-blue-700'
      : 'bg-red-100 border border-red-500 text-red-700';

  return (
    <div className={`p-4 rounded-md mb-4 ${alertClass}`}>
      <strong>{type === 'success' ? '完了メッセージ' : 'エラーメッセージ'}</strong>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
