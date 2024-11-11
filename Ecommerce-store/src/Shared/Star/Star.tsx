import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
interface starType{
  value:number;
}
function Star({ value }:starType) {
  return (
    <>
      <span>
        {value >= 1 ? (<BsStarFill className="text-yellow-500"/>) : 
          value >= 0.5 ?(<BsStarHalf className="text-yellow-500"/>): (<BsStar className="text-yellow-500"/>)}
      </span>
      <span>
        {value >= 2 ? (<BsStarFill className="text-yellow-500"/>) : 
          value >= 1.5 ?(<BsStarHalf className="text-yellow-500"/>): (<BsStar className="text-yellow-500"/>)}
      </span>
      <span>
        {value >= 3 ? (<BsStarFill className="text-yellow-500"/>) : 
          value >= 2.5 ?(<BsStarHalf className="text-yellow-500"/>): (<BsStar className="text-yellow-500"/>)}
      </span>
      <span>
        {value >= 4 ? (<BsStarFill className="text-yellow-500"/>) : 
          value >= 3.5 ?(<BsStarHalf className="text-yellow-500"/>): (<BsStar className="text-yellow-500"/>)}
      </span>
      <span>
        {value >= 5 ? (<BsStarFill className="text-yellow-500"/>) : 
          value >= 4.5 ?(<BsStarHalf className="text-yellow-500"/>): (<BsStar className="text-yellow-500"/>)}
      </span>
    </>
  );
}

export default Star;