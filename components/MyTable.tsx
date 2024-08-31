import React from "react";
import {
  useReactTable,
  ColumnOrderState,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// 定义数据类型
type DataType = Record<string, any>;

const getDataTypeColumns = (data: DataType): ColumnDef<DataType>[] => {
  return Object.keys(data || {}).map((key) => {
    if (typeof data[key] === "object") {
      return {
        header: key,
        accessorKey: key,
        columns: getDataTypeColumns(data[key]),
      };
    }
    return {
      header: key,
      accessorKey: key,
    };
  });
};

// 创建一个新的 Table 组件
const Table: React.FC<{ data: DataType[] }> = ({ data }) => {
  // 从数据中提取列
  const columns: ColumnDef<DataType>[] = React.useMemo(
    () => getDataTypeColumns(data[0]),
    [data]
  );
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);

  console.log("data", data, "columns", columns);
  // 创建表格实例
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnOrder,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex flex-row space-x-5">
        <div className="">
          <Checkbox
            checked={table.getIsAllColumnsVisible()}
            onCheckedChange={table.getToggleAllColumnsVisibilityHandler()}
          />
          <Label>全部显示</Label>
        </div>
        {table.getAllLeafColumns().map((column) => {
          return (
            <div key={column.id} className="self-center">
              <Checkbox
                checked={column.getIsVisible()}
                onCheckedChange={() =>
                  column.toggleVisibility(!column.getIsVisible())
                }
              />
              <Label>{column.id}</Label>
            </div>
          );
        })}
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-stone-900 ">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-stone-900 mx-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 修改 generateTable 函数
export const GenerateTable = (val: DataType[]) => {
  return <Table data={val} />;
};
