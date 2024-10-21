import React from 'react'
import styled from 'styled-components'
import Button from '../button'

interface UploadBoxProps {
  id?: string
  name?: string
}
const FileUploadWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: flex-start;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 3px;
  max-width: 800px;
`
const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(100% - 160px);
  margin-left: 10px;
  background: #f5f5f5;
  border: 1px dashed #ddd;
  padding: 10px;
`

const CanvasArea = styled.div`
  border: 1px solid #ddd;
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;

  canvas {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
  }

  p {
    font-size: 1.3rem;
    width: 100%;
    padding-top: 5px;
    text-align: center;
  }
`
const UploadBox: React.FC<UploadBoxProps> = () => {
  return (
    <FileUploadWrapper>
      <CanvasArea>
        <canvas></canvas>
      </CanvasArea>
      <DropArea>
        <p>
          ファイルをドロップ
          <br />
          または
        </p>
        <Button label="ファイルを選択" primary={false} />
      </DropArea>
    </FileUploadWrapper>
  )
}
export default UploadBox
