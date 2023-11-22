/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const inputFileName = e.target.value;
    setFileName(inputFileName);
    onFilter(inputFileName);
  };

  return (
    <div>
      <label htmlFor="fileName">Nombre del Archivo: </label>
      <input
        placeholder="ej: file2.csv"
        type="text"
        id="fileName"
        value={fileName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
