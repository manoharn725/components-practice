import useSort from "../hooks/use-sort";
import { GrCaretDown, GrCaretUp } from "react-icons/gr";
import Table from "../components/Table";



function SortableTable(props) {

    const { config, data } = props;

    const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className=" hover:bg-gray-200 cursor-pointer"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex justify-around items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

 

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  //   console.log(label);
  //   console.log(sortBy);
  //   console.log(sortOrder);

  if (label !== sortBy) {
    return (
      <div>
        <GrCaretUp />
        <GrCaretDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GrCaretUp />
        <GrCaretDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GrCaretUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GrCaretDown />
      </div>
    );
  }
}

export default SortableTable;
