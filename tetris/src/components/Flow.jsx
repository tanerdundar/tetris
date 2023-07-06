import Row from "./Row";

function Flow() {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="flow">
      {array.map((e) => {
        return <Row />;
      })}
    </div>
  );
}

export default Flow;
