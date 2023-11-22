import useFilesData from "./Hooks/useFilesData";
import DataTable from "./components/DataTable";
import Filter from "./components/Filter";
import { useState } from "react";

function App() {
  const [filteredFileName, setFilteredFileName] = useState("");
  const { data, loading, error } = useFilesData(filteredFileName);

  const handleFilter = (fileName) => {
    setFilteredFileName(fileName);
  };
  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <Filter onFilter={handleFilter} />
      {error ? (
        <p>No se encontraron archivos con el nombre especificado.</p>
      ) : null}
      <h1>Archivos:</h1>
      {data && <DataTable data={data} />}
    </div>
  );
}

export default App;
