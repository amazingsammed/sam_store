
import myDB from "@/libs/mysqldb";
import { NextResponse } from "next/server";



export async function GET() {
  const [results] = await myDB.query("SELECT * FROM `mystore`.`mst_stock_item` LIMIT 0,1000");
  //console.log(results[0])
  return NextResponse.json(results);
}

export async function POST(request) {
  const val = await request.json();
  console.log(val);
  const [results] = await myDB.query("INSERT INTO `accountingpro`.`stock_item` (`name`, `group`, `alias`, `unit`, `conversion`, `opening_qty`, `opening_rate`, `opening_value`, `is_full`, `salesprice`, `has_open_bal`, `warning_limit`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
    val.name,
    val.group,
    val.alias,
    val.unit,
    val.conversion,
    val.opening_qty,
    val.opening_rate,
    val.opening_value,
    val.is_full,
    val.salesprice,
    val.has_open_bal,
    val.warning_limit
  ]);
  return NextResponse.json({ message: "Product Added succesfully" }, { status: 201 });
}

