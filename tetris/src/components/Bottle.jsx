import Flow from "./Flow";

function Bottle() {
  return (
    <div className="bottle">
      <div className="head">
        <div className="head-left"></div>
        <div className="head-right"></div>
      </div>
      <div className="top-of-bottle">
        <div className="top-of-bottle left"></div>
        <div className="top-of-bottle middle"></div>
        <div className="top-of-bottle right"></div>
      </div>
      <Flow />
    </div>
  );
}

export default Bottle;
