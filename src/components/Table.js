import { Fragment } from "react";

function Table({ data, config, keyFn }) {

  const rendredHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const rendredRows = data.map((rowData) => {
    const rendredCells = config.map((column) => {
      return (
        <td className="px-6 py-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {rendredCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{rendredHeader}</tr>
      </thead>
      <tbody>{rendredRows}</tbody>
    </table>
  );
}
export default Table;
