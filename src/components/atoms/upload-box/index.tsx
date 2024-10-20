import React from 'react'

interface UploadBoxProps {
  id?: string
  name?: string
}

const UploadBox: React.FC<UploadBoxProps> = ({ id, name }) => {
  return (
    <div className="form_upload">
      <div className="canvas_area">
        <canvas></canvas>
      </div>
      <div className="drop_area">
        <p>
          ファイルをドロップ
          <br />
          または
        </p>
        <input
          type="button"
          value="ファイルを選択"
          id={id}
          name={name}
          className="btn2"
        />
      </div>
    </div>
  )
}
export default UploadBox
