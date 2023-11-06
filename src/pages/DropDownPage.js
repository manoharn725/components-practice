import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
    console.log(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Black", value: "black" },
    { label: "Yellow", value: "yellow" },
    { label: "Greeen", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
  ];

  // const myFunction(options, isSelected){
  //     if(!isSelected){
  //        console.log('not selected')
  //     } else {
  //         console.log('selected')
  //     }
  // }
  // myFunction(options, null);

  return (
    <div className="flex bg-yellow-50 p-3 my-2 h-60">
      DropDown 
      <DropDown
        options={options}
        selection={selection}
        onSelect={handleSelect}
      />
    </div>
  );
}
export default DropDownPage;
