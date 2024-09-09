import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailNotification from "../SubPages/EmailNotification";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function StoreSettings() {
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 ">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Store Settings</h1>
      </div>

      <div className="">
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="billinginvoices">
              Billing & Invoices
            </TabsTrigger>
            <TabsTrigger value="paswword">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-5">
              <div className="grid gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex flex-row gap-2 items-center">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Store Name
                        <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                          {" "}
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem dignissimos nesciunt deleniti ut fugit
                      inventore officiis nemo porro repudiandae qui quis at
                      omnis, ad sequi sapiente? Est accusamus asperiores iste.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex flex-row">
                        <h4 className="text-slate-700">Address:</h4>
                        <p className="text-sm text-muted-foreground pl-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Possimus, dolor dolorem. Quibusdam ad.
                        </p>
                      </div>

                      <div className="flex flex-row">
                        <h4 className="text-slate-700">Email:</h4>
                        <p className="text-sm text-muted-foreground pl-1">
                          support@buyurparts.com
                        </p>
                      </div>

                      <div className="flex flex-row">
                        <h4 className="text-slate-700">Mobile:</h4>
                        <p className="text-sm text-muted-foreground pl-1">
                          (44) 123 1234 123
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex flex-row gap-2 items-center">
                        Password
                        <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      You can set a permanent password if you don't want to use
                      temporary login codes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <div className="grid gap-2"> */}
                    <Button className="border border-gray-300 bg-transparent hover:bg-transparent hover:border-gray-500 text-gray-600">
                      Set New Password
                    </Button>
                    {/* </div>  */}
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex flex-row gap-2 items-center">
                        Return Pollicy
                        <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="space-y-2 flex flex-col items-center justify-between text-sm text-gray-400">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam maiores, ut voluptatem enim nulla mollitia
                          blanditiis voluptatum est facere, excepturi dolorem
                          iste ab quasi aperiam culpa doloribus doloremque.
                          Alias, dolorem.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam maiores, ut voluptatem enim nulla mollitia
                          blanditiis voluptatum est facere, excepturi dolorem
                          iste ab quasi aperiam culpa doloribus doloremque.
                          Alias, dolorem.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex flex-row gap-2 items-center">
                        Shipping policy
                        <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="space-y-2 flex flex-col items-center justify-between text-sm text-gray-400">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam maiores, ut voluptatem enim nulla mollitia
                          blanditiis voluptatum est facere, excepturi dolorem
                          iste ab quasi aperiam culpa doloribus doloremque.
                          Alias, dolorem.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam maiores, ut voluptatem enim nulla mollitia
                          blanditiis voluptatum est facere, excepturi dolorem
                          iste ab quasi aperiam culpa doloribus doloremque.
                          Alias, dolorem.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <EmailNotification />
            </div>
          </TabsContent>

          <TabsContent value="billinginvoices">
            <div className="grid gap-5">
              <div className="grid gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex flex-row gap-2 items-center">
                        Billing & Invoices
                        <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem dignissimos nesciunt deleniti ut fugit
                      inventore officiis nemo porro repudiandae qui quis at
                      omnis, ad sequi sapiente? Est accusamus asperiores iste.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid gap-10">
                      <Card x-chunk="">
                        <CardHeader>
                          <CardTitle>
                            <div className="flex flex-row gap-2 items-center">
                              Billing Information
                              <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            <div className=" grid grid-flow-col justify-between border-b border-b-gray-300 pb-5">
                              <h5 className="text-sm text-gray-800">
                                Payment Method
                              </h5>
                              <span className="text-sm text-gray-400">
                                Mastercard ending 9282
                              </span>
                            </div>

                            <div className=" grid grid-flow-col justify-between border-b border-b-gray-300 pb-5">
                              <h5 className="text-sm text-gray-800">
                                Billing Interval
                              </h5>
                              <span className="text-sm text-gray-400">
                                Annually
                              </span>
                            </div>

                            <div className=" grid grid-flow-col justify-between border-b border-b-gray-300 pb-5">
                              <h5 className="text-sm text-gray-800">
                                VAT/GST Number
                              </h5>
                              <span className="text-sm text-gray-400">
                                UK849700927
                              </span>
                            </div>

                            <div className=" grid grid-flow-col justify-between border-b border-b-gray-300 pb-5">
                              <h5 className="text-sm text-gray-800">
                                Your Address
                              </h5>
                              <span className="text-sm text-gray-400">
                                34 Savoy Street, London, UK, 24E8X Edit
                              </span>
                            </div>

                            <div className=" grid grid-flow-col justify-between">
                              <h5 className="text-sm text-gray-800">
                                Billing Address
                              </h5>
                              <span className="text-sm text-gray-400">
                                34 Savoy Street, London, UK, 24E8X Edit
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card x-chunk="">
                        <CardHeader>
                          <CardTitle>
                            <div className="flex flex-row gap-2 items-center">
                              Invoices
                              <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableCaption>
                              A list of your recent invoices.
                            </TableCaption>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-[100px]">
                                  Invoice
                                </TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">
                                  Amount
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                  <TableCell className="font-medium">
                                    {invoice.invoice}
                                  </TableCell>
                                  <TableCell>{invoice.paymentStatus}</TableCell>
                                  <TableCell>{invoice.paymentMethod}</TableCell>
                                  <TableCell className="text-right">
                                    {invoice.totalAmount}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                            <TableFooter>
                              <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">
                                  $2,500.00
                                </TableCell>
                              </TableRow>
                            </TableFooter>
                          </Table>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="paswword">
            <div className="geid gap-5">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-row gap-2 items-center">
                      Reset Password
                      <Button className=" px-0 py-0 h-auto bg-transparent text-gray-400 hover:bg-transparent">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem dignissimos nesciunt deleniti ut fugit
                    inventore officiis nemo porro repudiandae qui quis at omnis,
                    ad sequi sapiente? Est accusamus asperiores iste.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-10">
                    <div className="flex flex-col">
                      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Change Password
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email" 
                              defaultValue={"testing@user.com"}
                              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Old Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="old-password"
                              defaultValue={"**********"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              defaultValue={"**********"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="confirm-password"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Confirm password
                            </label>
                            <input
                              type="confirm-password"
                              name="confirm-password"
                              id="confirm-password"
                              defaultValue={"**********"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled
                            />
                          </div> 
                        </form>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default StoreSettings;
