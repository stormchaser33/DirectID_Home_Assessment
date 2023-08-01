import React from "react";

export type ColumnType = {
  name: string;
  canSort: boolean;
  colSpan: number;
};

export interface THeadProps {
  columns: ColumnType[];
}

const THead: React.FC<THeadProps> = (props) => {
  return (
    <thead className="text-left">
      <tr className="bg-tableHeaderBg text-tableHeaderFont text-xl">
        {props.columns.map((column: ColumnType) => {
          const className = `w-${column.colSpan}/12 p-5`;
          return (
            <th className={className}>
              <div>{column.name}</div>
              <div>{column.canSort}</div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default THead;
