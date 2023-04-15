import React from "react";

const List = ({ list }: any) => {
  return (
    <div>
      {list.map((item: any) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

export default List;
