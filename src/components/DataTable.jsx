/* eslint-disable react/prop-types */

import Table from "react-bootstrap/Table";
const DataTable = ({ data }) => {
  return (
    <Table className="table" striped bordered hover variant="light">
      <thead className="thead-dark">
        <tr>
          <th scope="col">File Name</th>
          <th scope="col">Text</th>
          <th scope="col">Number</th>
          <th scope="col">Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((fileData, index) => (
          <tr key={index}>
            <td>{fileData.file}</td>
            <td>{fileData.lines[0].text}</td>
            <td>{fileData.lines[0].number}</td>
            <td>{fileData.lines[0].hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
