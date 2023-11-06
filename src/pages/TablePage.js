import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: "2" },
    { name: "Grapes", color: "bg-purple-500", score: "5" },
    { name: "Apple", color: "bg-red-500", score: "8" },
    { name: "Banana", color: "bg-yellow-500", score: "3" },
    { name: "Lime", color: "bg-green-500", score: "6" },
    { name: "Watermelon", color: "bg-red-400", score: "7" },
    { name: "Mango", color: "bg-yellow-700", score: "9" },  
  ];

  const config = [
    { label: "Name", 
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name, 
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Sq-Score",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },

  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
export default TablePage;
