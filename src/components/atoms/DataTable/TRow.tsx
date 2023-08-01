import React from "react";

export type TRowData = Array<string | number>;

export interface IRowPropTypes {
  data: TRowData;
  index: number;
  key: string;
}

const TRow: React.FC<IRowPropTypes> = (props) => {
  return (
    <tr key={props.key}>
      {props.data.map((item) => (
        <td>{item}</td>
      ))}
    </tr>
  );
};

export default TRow;
