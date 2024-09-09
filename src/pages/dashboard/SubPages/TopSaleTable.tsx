import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const orders = [
    {
      orderId: "ORD001",
      productName: "Power Stop® – Evolution Drilled and Slotted",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      orderId: "ORD002",
      productName: "4000XS Drilled and Slotted Brake Rotor",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      orderId: "ORD003",
      productName: "Power Stop® – Evolution Drilled and Slotted",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      orderId: "ORD004",
      productName: "4000XS Drilled and Slotted Brake Rotor",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      orderId: "ORD005",
      productName: "Power Stop® – Evolution Drilled and Slotted",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      orderId: "ORD006",
      productName: "4000XS Drilled and Slotted Brake Rotor",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      orderId: "ORD007",
      productName: "Power Stop® – Evolution Drilled and Slotted",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export function TopSaletable() {
    return (
      <Table className="text-center">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Order Id</TableHead>
            <TableHead className=" text-center">Product Name</TableHead>
            {/* <TableHead>Method</TableHead> */}
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell className="font-medium">{order.orderId}</TableCell>
              <TableCell>{order.productName}</TableCell>
              {/* <TableCell>{order.paymentMethod}</TableCell> */}
              <TableCell className="text-right">{order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  