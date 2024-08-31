import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [inputVal, setInputVal] = React.useState(`[{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  },{
    "A": "1",
    "bbbbbbbb": "2",
    "cccccccc": "3",
    "ddd3ddddd": "q",
    "A": [
        {
            "A": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c":  {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
        }
    ],
    "b": [
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        },
        {
            "aa": "1",
            "b": "2",
            "c": "3"
        }
    ]
  }]`);
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
      return generateTable(val);
    } else if (typeof val === "object") {
      return generateColumns(val);
    } else {
      return <div className="m-1 p-0">{val}</div>;
    }
  };

  const generateColumns = (val: Record<string, any>) => {
    return (
      <Table>
        {/* <TableHeader>
          <TableRow>
            <TableHead className="p-0 m-0">Key</TableHead>
            <TableHead className="p-0 m-0">Value</TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          {Object.entries(val).map(([key, value], idx) => (
            <TableRow key={key} className="hover:bg-slate-300">
              <TableCell className="py-0 px-2 m-0 font-bold border">
                {key}
              </TableCell>
              <TableCell className="p-0 m-0 w-full border">
                {showContent(value)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const generateTable = (val: Array<Record<string, any>>) => {
    if (!val || val.length === 0) return null;

    const headers = Object.keys(val[0]);

    return (
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-300">
            {headers.map((header) => (
              <TableCell
                key={header}
                className="py-0 px-2 m-0 font-bold border"
              >
                <div className="flex items-center justify-center m-1">
                  {header}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {val.map((row, idx) => (
            <TableRow key={idx} className="p-0 m-0 border hover:bg-slate-300">
              {headers.map((header) => (
                <TableCell key={`${idx}-${header}`} className="p-0 m-0 border">
                  {showContent(row[header])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="p-3 flex flow-row h-full">
      <Textarea
        value={inputVal}
        className="w-[300px] h-full mr-3"
        onChange={(e) => setInputVal(e.target.value)}
      ></Textarea>

      <ScrollArea className="flex-1 h-full border rounded-md p-3">
        {showContent(tableVal)}
      </ScrollArea>
    </div>
  );
}
