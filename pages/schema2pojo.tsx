"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
const { Parser } = require("node-sql-parser");
const parser = new Parser();

type Column = {
  name: string;
  type: string;
  comment: string;
};

const typeMap: { [key: string]: string } = {
  int: "Integer",
  tinyint: "Integer",
  smallint: "short",
  mediumint: "Integer",
  bigint: "Long",
  float: "Float",
  double: "Double",
  decimal: "BigDecimal",
  char: "String",
  varchar: "String",
  text: "String",
  tinytext: "String",
  mediumtext: "String",
  longtext: "String",
  date: "Date",
  datetime: "Date",
  timestamp: "Date",
  time: "Time",
  year: "Integer",
  bit: "boolean",
  json: "String",
  enum: "String",
  set: "String",
  blob: "byte[]",
  tinyblob: "byte[]",
  mediumblob: "byte[]",
  longblob: "byte[]",
};

export default function Json2Table() {
  const [inputVal, setInputVal] = React.useState(`CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '用户唯一标识符',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户登录名',
    password VARCHAR(255) NOT NULL COMMENT '用户登录密码，建议使用加密存储',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '用户邮箱，用于联系和验证',
    phone VARCHAR(20) COMMENT '用户手机号码',
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '用户注册时间',
    last_login TIMESTAMP COMMENT '用户最后一次登录时间',
    status TINYINT DEFAULT 1 COMMENT '用户状态：1-激活，0-未激活，-1-禁用'
) ENGINE=InnoDB COMMENT='用户信息表';
`);
  const [outputVal, setOutputVal] = React.useState(``);
  const [haveConstructor, setHaveConstructor] = React.useState(false);
  const [haveGettersetter, setHaveGettersetter] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!inputVal) {
        setOutputVal("");
        return;
      }
      parseSql(inputVal);
    } catch (error) {
      console.error("Invalid input:", error);
    }
  }, [inputVal, haveConstructor, haveGettersetter]);

  const parseSql = (sql: string) => {
    const ast = parser.astify(sql);
    console.log(ast);
    const col = ast[0]["create_definitions"];
    const rst: Array<Column> = col.map((item: any) => {
      return {
        name: toCamelCase(item["column"]["column"]),
        type: typeMap[item["definition"]["dataType"].toLowerCase()],
        comment: item["comment"]["value"]["value"],
      };
    });

    const table: string = ast[0]["table"][0]["table"];
    const tableName: string = ast[0]["table_options"]
      .filter((x: any) => x.keyword === "comment")[0]
      ["value"].replace(/'/g, "");

    let javaClassCode = `/**\n * ${tableName}\n **/\npublic class ${capitalize(
      table
    )} {\n`;

    rst.forEach((item: Column) => {
      javaClassCode += `    /**\n`;
      javaClassCode += `     * ${item.comment}\n`;
      javaClassCode += `     **/\n`;
      javaClassCode += `    private ${item.type} ${item.name};\n`;
    });

    // 构造器
    if (haveConstructor) {
      javaClassCode += `\n`;
      javaClassCode += `    public ${capitalize(table)}(`;

      rst.forEach((item: Column, index: number) => {
        const { name, type } = item;
        javaClassCode += `${type} ${name}${index < rst.length - 1 ? ", " : ""}`;
      });

      javaClassCode += `) {\n`;

      rst.forEach((item: Column) => {
        const { name } = item;
        javaClassCode += `        this.${name} = ${name};\n`;
      });
      javaClassCode += `    }\n`;
    }

    if (haveGettersetter) {
      rst.forEach((col: Column) => {
        const { name, type } = col;
        // Getter
        javaClassCode += `\n    public ${type} get${capitalize(name)}() {\n`;
        javaClassCode += `        return ${name};\n`;
        javaClassCode += `    }\n`;

        // Setter
        javaClassCode += `\n    public void set${capitalize(
          name
        )}(${type} ${name}) {\n`;
        javaClassCode += `        this.${name} = ${name};\n`;
        javaClassCode += `    }\n`;
      });
    }
    setOutputVal(javaClassCode);
  };

  // 辅助函数：下划线变驼峰
  function toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  // 辅助函数：首字母大写
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="p-3 flex flow-row h-full">
      <Textarea
        value={inputVal}
        className="h-full mr-3 resize-none flex-1"
        onChange={(e) => setInputVal(e.target.value)}
      ></Textarea>

      <div className="flex flex-col m-1">
        <div>
          <Checkbox
            checked={haveConstructor}
            onCheckedChange={(checked) => setHaveConstructor(checked === true)}
          />
          <label className="ml-1">constructor</label>
        </div>
        <div>
          <Checkbox
            checked={haveGettersetter}
            onCheckedChange={(checked) => setHaveGettersetter(checked === true)}
          />
          <label className="ml-1">getter & setter</label>
        </div>
      </div>

      <Textarea
        value={outputVal}
        className="h-full mr-3 resize-none flex-1"
        onChange={(e) => setOutputVal(e.target.value)}
      ></Textarea>
    </div>
  );
}
