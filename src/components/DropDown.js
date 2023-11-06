import { useState, useEffect, useRef } from "react";
import { GrUp, GrDown } from "react-icons/gr";
import Panel from "./Panel";
import "./DropDown.css";

function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      // console.log(divEl.current);
      // console.log(event.target);

      if (!divEl.current.contains(event.target)) {
        // console.log("close the tab");
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const icon = <span>{isOpen ? <GrUp /> : <GrDown />}</span>;

  const handleOptionClick = (option) => {
    console.log(`I should close ${option?.label}`);
    setIsOpen(false);
    onSelect(option?.label);
  };

  const rendredOptions = options.map((option, index) => {
    return (
      <Panel
        className="options"
        onClick={() => handleOptionClick(option)}
        key={option?.value}
      >
        {option?.label}
      </Panel>
    );
  });

  //   console.log(rendredOptions);

  //   let content = 'Select Color';
  //   if(selection){
  //     content = selection;
  //     // console.log(selection);
  //   }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="select" onClick={handleClick}>
        {selection || "Select Color"}
        {icon}
      </Panel>
      {isOpen && <div>{rendredOptions}</div>}
    </div>
  );
}
export default DropDown;
