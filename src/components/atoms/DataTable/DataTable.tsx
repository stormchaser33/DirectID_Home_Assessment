import React from "react";
import THead from "./THead";
import TRow, { TRowData } from "./TRow";

import { ColumnType } from "./THead";
interface DataTablePropTypes {
  data: Array<TRowData>;
  columns: ColumnType[];
}

const DataTable: React.FC<DataTablePropTypes> = (props) => {
  return (
    <table className="w-full">
      <THead columns={props.columns} />
      {props.data.map((item, index) => (
        <TRow data={item} index={index} key={"table" + index} />
      ))}
    </table>
  );
};

export default DataTable;
