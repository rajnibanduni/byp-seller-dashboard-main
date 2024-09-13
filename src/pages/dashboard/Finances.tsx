import DashboardContent from "@/components/DashboardContent";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

import {
  ArrowDownNarrowWide,
  BriefcaseBusiness,
  CreditCard,
  Edit,
  HandCoins,
  Info,
  PiggyBank,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@/components/ui/form";

const transactions = [
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Pending",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Completed",
    totalAmount: "$250.00",
    paymentMethod: "Net Banking",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Canceled",
    totalAmount: "$250.00",
    paymentMethod: "Net Banking",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Completed",
    totalAmount: "$250.00",
    paymentMethod: "Net Banking",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Pending",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Canceled",
    totalAmount: "$250.00",
    paymentMethod: "Net Banking",
  },
  {
    username: "user 01",
    paymentdate: "22/01/2024",
    paymentStatus: "Pending",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];

function FinancesPage() {
  const form = useForm({});

  return (
    <DashboardContent title="Finances">
      <main className="grid flex-1 items-start gap-4 md:gap-8 w-full">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Finances</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Overview Goes */}
        <div className="grid gap-5">
          <div className="flex flex-row justify-between">
            <h2 className="text-black text-2xl font-bold">Transactions</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#E11D47] hover:bg-[#E53B5B] max-w-[180px] items-center">
                  <ArrowDownNarrowWide className="mr-1 " />
                  Request Withdraw
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Send Withdraw Request</DialogTitle>
                  <DialogDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <Form {...form}>
                    <form>
                      <div className="grid gap-5">
                      <div className="grid gap-3 w-full">
                        <Label htmlFor="status">Withdraw Method *</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Withdraw Method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="published">Paypal</SelectItem>
                            <SelectItem value="archived">
                              Bank Transfer
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-3 w-full">
                        <Label htmlFor="name">Withdraw Amount *</Label>
                        <Input
                          id="name"
                          type="number"
                          className="w-full"
                          placeholder="$00.00"
                          />
                      </div>

                      <div className="grid gap-3">
                      <div className="flex flex-row items-center w-full">
                        <Label className="text-gray-600 text-sm">Withdraw Charge :</Label>
                        <Label className="text-gray-900 text-sm">$00.00</Label>
                      </div>

                      <div className="flex flex-row items-center w-full">
                        <Label className="text-gray-600 text-sm">Receivable Amount :</Label>
                        <Label className="text-gray-900 text-sm">$00.00</Label>
                      </div>

                      </div>
                      </div>
                    </form>
                  </Form>
  
                </div>
                <DialogFooter>
                  <div className="flex flex-row  gap-2">
                    <Button type="submit">Submit Request</Button>
                    <Button type="submit" className="bg-transparent text-balck hover:bg-transparent border">Cancle</Button>
                  </div>
                  
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 w-full">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
                <BriefcaseBusiness className="w-10 h-10 text-[#E11D47]" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-xl font-bold">$45,23.89</div>
                <p className="text-xs text-muted-foreground">
                  Available Balance (USD)
                </p>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
                <HandCoins className="w-10 h-10 text-[#E11D47]" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">$74,361.34k</div>
                <p className="text-xs text-muted-foreground">
                  Withdrawal(Previous Month)
                </p>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
                <PiggyBank className="w-10 h-10 text-[#E11D47]" />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">$97,685.22k</div>
                <p className="text-xs text-muted-foreground">
                  Receive (Previous Month)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview End */}

        {/* Transactions Table Goes  */}
        <Card>
          <CardHeader>
            <CardTitle>Total Transactions :- $47,347.09</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all"> All</TabsTrigger>
                <TabsTrigger value="completed"> Completed </TabsTrigger>
                <TabsTrigger value="pending"> Pending </TabsTrigger>
                <TabsTrigger value="canceled"> Canceled </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Downalod</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.username}>
                        <TableCell className="font-medium">
                          {transaction.username}
                        </TableCell>
                        <TableCell>
                          <Badge>{transaction.paymentStatus}</Badge>
                        </TableCell>
                        <TableCell>{transaction.paymentdate}</TableCell>
                        <TableCell>{transaction.totalAmount}</TableCell>
                        <TableCell className="text-right flex flex-row space-x-5 cursor-pointer ">
                          <Edit className="text-right w-4 hover:text-[#E11D47]" />
                          <Trash2 className="text-right w-4 hover:text-[#E11D47]" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TabsContent>

              <TabsContent value="completed"></TabsContent>

              <TabsContent value="pending"></TabsContent>

              <TabsContent value="canceled"></TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Transactions Table End  */}

        {/* Current Plan Section Goes */}
        <Card>
          <CardHeader>
            <CardTitle className="mb-5">Current Plan Overview </CardTitle>

            <CardContent>
              <div className="grid gap-5">
                <div className="border border-slate-100 border-solid rounded-lg ">
                  <p className="text-lg font-semibold  border-b border-b-zinc-100 py-6 px-4">
                    Current Plan Overview
                  </p>
                  <div className="flex flex-row justify-between p-6 ">
                    <div className="">
                      <p className="text-sm text-slate-600">Current Plan</p>
                      <h2 className="text-2xl font-bold py-2 ">
                        Starter - Jan 2021
                      </h2>
                      <p className="text-sm py-2 text-slate-400">
                        Unlimited access to essential tools for design,
                        bootstrap themes, illustrator and icons.
                      </p>
                      <p className="flex flex-row text-slate-600 text-sm items-center">
                        {" "}
                        <Info className="w-4 mr-1" />
                        Next Payment: on{" "}
                        <span className="text-pink-800 mx-1">$499.00 USD</span>
                        <span className="font-semibold mx-1">Jan 1, 2022</span>
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm text-slate-600">Yearly Payment</p>
                      <h1 className="text-2xl font-bold text-[#E11D47]">
                        $499 USD
                      </h1>
                      <Link to={"/"} className="text-sm py-2 text-slate-400">
                        Learn more about our membership policy
                      </Link>
                      <Button className=" mb-4">Change Plan</Button>
                      <Button className="bg-[#E11D47] hover:bg-[#E53B5B]">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                  <div className="border-t border-t-zinc-300">
                    <h2 className="text-lg font-semibold py-6 px-4">
                      Payment method
                    </h2>

                    <div className="flex flex-row items-center justify-between p-4">
                      <div className="flex flex-row items-center">
                        <CreditCard className="mb-0 mr-4 w-8 text-[#E11D47]" />
                        <div>
                          <h6 className="mb-0 dark:text-white">Card Name</h6>
                          <span className="text-gray-400">**7328</span>
                        </div>
                      </div>

                      <div className="flex flex-row items-center">
                        <Button className="bg-transparent hover:bg-transparent text-[#E11D47]">
                          Remove
                        </Button>
                        <Button className="">Change</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        {/* Current Plan Section End */}
      </main>
    </DashboardContent>
  );
}

export default FinancesPage;
