import Tile from "./Tile";

function Row() {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="row">
      {array.map((e) => {
        return <Tile />;
      })}
    </div>
  );
}

export default Row;
