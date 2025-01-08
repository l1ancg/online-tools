import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Json2Table() {
  const [inputVal, setInputVal] = React.useState(`{
  "store": {
    "name": "My Bookstore",
    "location": {
      "address": "123 Book St",
      "city": "Reading Town",
      "state": "Bookland",
      "zipCode": "12345"
    },
    "contact": {
      "phone": "+1-234-567-8901",
      "email": "info@mybookstore.com",
      "website": "http://www.mybookstore.com"
    },
    "books": [
      {
        "title": "Learning JavaScript",
        "author": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "price": 29.99,
        "inStock": true,
        "genres": [
          "Programming",
          "Technology"
        ],
        "publishDate": "2021-05-15",
        "ratings": {
          "averageRating": 4.5,
          "numberOfReviews": 120
        }
      },
      {
        "title": "Mastering Python",
        "author": {
          "firstName": "Jane",
          "lastName": "Smith"
        },
        "price": 34.99,
        "inStock": false,
        "genres": [
          "Programming",
          "Technology"
        ],
        "publishDate": "2020-10-01",
        "ratings": {
          "averageRating": 4.8,
          "numberOfReviews": 85
        }
      },
      {
        "title": "The Great Gatsby",
        "author": {
          "firstName": "F. Scott",
          "lastName": "Fitzgerald"
        },
        "price": 10.99,
        "inStock": true,
        "genres": [
          "Fiction",
          "Classic"
        ],
        "publishDate": "1925-04-10",
        "ratings": {
          "averageRating": 4.2,
          "numberOfReviews": 200
        }
      },
      {
        "title": "The Art of War",
        "author": {
          "firstName": "Sun",
          "lastName": "Tzu"
        },
        "price": 12.50,
        "inStock": true,
        "genres": [
          "Philosophy",
          "Military"
        ],
        "publishDate": null,
        "ratings": {
          "averageRating": 4.7,
          "numberOfReviews": 150
        }
      }
    ],
    "employees": [
      {
        "name": {
          "firstName": "Alice",
          "lastName": "Johnson"
        },
        "position": [
          "Manager",
          {
            "title": "Senior Manager",
            "level": "Senior"
          }
        ],
        "email": [
          "alice@bookstore.com",
          {
            "personal": "alice.j@gmail.com"
          }
        ],
        "_id": "emp001"
      },
      {
        "_id": "emp002",
        "name": {
          "firstName": "Bob",
          "lastName": "Brown"
        },
        "position": "Sales Associate",
        "email": "bob@bookstore.com",
        "hireDate": "2022-06-15",
        "skills": [
          "Customer Service",
          "Sales",
          "Inventory Management"
        ]
      }
    ]
  }
}`);
  const [tableVal, setTableVal] = React.useState<
    Record<string, any> | Array<Record<string, any>> | null
  >();

  React.useEffect(() => {
    try {
      if (!inputVal) {
        setTableVal({});
        return;
      }
      const parsed = JSON.parse(inputVal);
      setTableVal(parsed);
    } catch (error) {
      console.error("Invalid input:", error);
    }
  }, [inputVal]);

  const showContent = (
    val: Record<string, any> | Array<Record<string, any>> | any | null
  ) => {
    if (val === null || val === undefined) {
      return <div className="m-1 p-0"></div>;
    }
    // console.log("typeof ->", typeof val);

    if (typeof val === "object") {
      if (val instanceof Array) {
        return generateTable(val);
      } else {
        return generateColumns(val);
      }
    } else {
      return <div className="m-1 p-0">{val || ""}</div>;
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

    if (typeof val[0] === "string") {
      return (
        <Table>
          <TableBody>
            {Object.entries(val).map(([key, value], idx) => (
              <TableRow key={key} className="hover:bg-slate-300">
                <TableCell className="p-0 m-0 w-full border">
                  {showContent(value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }

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
        className="w-[300px] h-full mr-3 resize-none"
        onChange={(e) => setInputVal(e.target.value)}
      ></Textarea>

      <div className="flex-1 h-full overflow-auto border rounded-md p-3">
        {showContent(tableVal)}
      </div>
    </div>
  );
}
