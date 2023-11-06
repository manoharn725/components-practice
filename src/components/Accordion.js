import  { useState } from 'react';
import { GrPrevious, GrDown } from "react-icons/gr";
import './Accordion.css';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

 const handleClick = (nextIndex)=> {

  setExpandedIndex((currentExpandednIndex)=>{
    if(currentExpandednIndex === nextIndex){
      return -1;
    } else{
      return nextIndex;
    }
  })

 }

  const renderedItems = items.map((item, index) => {
   const isExpanded = index === expandedIndex;
    // console.log(isExpanded);
     const icon = <span>{isExpanded ? <GrDown /> : <GrPrevious /> }</span>

    return (
      <div key={item.id}>
        <div onClick={()=> handleClick(index)} className='label'>{item.label}{icon}</div>
        {isExpanded && <div className="content">{item.content}</div>}
        
      </div>
    );
  });
  // console.log(renderedItems);
  return (
    <div>
      <div>{renderedItems}</div>
    </div>
  );
}
export default Accordion;
