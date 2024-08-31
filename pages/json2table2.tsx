import React from "react";
import { Textarea } from "@/components/ui/textarea";

import {GenerateTable} from '@/components/MyTable'

export default function Home() {
  const [inputVal, setInputVal] = React.useState(`{
    "aaaaaaaa": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "dddddddd": "4",
    "eeeeeeee": "5",
    "aaa": "6",
    "bbb": "7",
    "ccc": "8",
    "eedeeeeee": "9",
    "eee2eeeee": "-",
    "ddd3ddddd": "q",
    "a": {
        "aa": "1",
        "b": "2",
        "c": "3"
    }
}`);
  const [tableVal, setTableVal] = React.useState<
    Record<string, any> | Array<Record<string, any>> | null
  >();

  React.useEffect(() => {
    try {
      const parsed = JSON.parse(inputVal);
      setTableVal(parsed);
    } catch (error) {
      console.error("Invalid input:", error);
    }
  }, [inputVal]);

  const showContent = (
    val: Record<string, any> | Array<Record<string, any>> | any | null
  ) => {
    if (val instanceof Array) {
      return GenerateTable(val);
    } else if (typeof val === "object") {
      return GenerateTable([val]);
    } else {
      return <div className="m-1 p-1">{val}</div>;
    }
  };

  // 定义数据类型
  type DataType = Record<string, any>;


  return (
    <div className="p-3 flex flow-row h-full">
      <Textarea
        value={inputVal}
        className="w-[300px] h-full bg-amber-50 mr-3"
        onChange={(e) => setInputVal(e.target.value)}
      ></Textarea>

      <div className="flex-1 bg-lime-50 overflow-auto">
        {showContent(tableVal)}
      </div>
    </div>
  );
}
