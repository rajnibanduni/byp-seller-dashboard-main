import DashboardContent from "@/components/DashboardContent";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

import LineChartPage from "./Charts/LineChart";
import ProfilPage from "./SubPages/Profit";
import SaleProgressPage from "./SubPages/SaleProgress";
import AreaChartPage from "./Charts/AreaChart";
import PieChartpage from "./Charts/PieChart";
import RecentSalePage from "./SubPages/RecentSale";
import { CalendarDateRangePicker } from "./SubPages/CalendarDateRangePicker";
import { TopSaletable } from "./SubPages/TopSaleTable";
import TopEarningPage from "./Charts/TopEarningBarChart";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statments = [
  {
    ID:"91",
    balanceDate: "12 Macrh 2024",
    trnDate: "20 March 2024",
    type: "Lorem ipsum dolor, sit amet",
    debit: "$9393",
    credit:"$93",
    balance:"-$123"
  },
  {
    ID:"92",
    balanceDate: "12 Macrh 2024",
    trnDate: "20 March 2024",
    type: "Lorem ipsum dolor, sit amet",
    debit: "$9393",
    credit:"$93",
    balance:"-$123"
  },
  {
    ID:"93",
    balanceDate: "12 Macrh 2024",
    trnDate: "20 March 2024",
    type: "Lorem ipsum dolor, sit amet",
    debit: "$9393",
    credit:"$93",
    balance:"-$123"
  },
]

function AnalyticsPage() {
  //Line chart end
  return (
    <DashboardContent title="Analytics">
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
                <Link to="#">Analytics</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Tabs defaultValue="overview">
          <TabsList className="mb-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="salesbyday">Sales by day</TabsTrigger>
            <TabsTrigger value="topselling">Top Selling</TabsTrigger>
            <TabsTrigger value="topearning">Top Earning</TabsTrigger>
            <TabsTrigger value="statement">Statement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overviews</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full mb-10">
                  <div className="rounded-xl border border-dashed border-blue-500 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        $45,231.89
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                        $00
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Gross sales in this period
                      </p>
                    </div>
                  </div>
                  {/* Gross sales End */}
                  <div className="rounded-xl border border-dashed border-emerald-500 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        $0.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                        $00
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Net sales in this period
                      </p>
                    </div>
                  </div>
                  {/* Net sales End */}
                  <div className="rounded-xl border border-dashed border-rose-800 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        200.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-800 leading-none ml-1">
                        $10
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        orders placed
                      </p>
                    </div>
                  </div>
                  {/* Orders Placed End */}
                  <div className="rounded-xl border border-dashed border-pink-500 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        100.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-500 leading-none ml-1">
                        +30
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Items purchased
                      </p>
                    </div>
                  </div>
                  {/* Items Purchased End */}
                  <div className="rounded-xl border border-dashed border-pink-500 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        $00.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-500 leading-none ml-1">
                        -30
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Refunded 0 orders (0 items)
                      </p>
                    </div>
                  </div>
                  {/* Refunded 0 orders End */}
                  <div className="rounded-xl border border-dashed border-pink-800 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        $00.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-800 leading-none ml-1">
                        + 30
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Charged for shipping
                      </p>
                    </div>
                  </div>
                  {/* Charged for Shipping End */}
                  <div className="rounded-xl border border-dashed border-orange-500 bg-card text-card-foreground ">
                    <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h2 className="text-2xl tracking-tight font-bold">
                        $00.00
                      </h2>
                      <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-orange-500 leading-none ml-1">
                        + 30
                      </span>
                    </div>
                    <div className="p-4 pt-0">
                      <p className="text-xs text-muted-foreground">
                        Worth of coupons used
                      </p>
                    </div>
                  </div>
                  {/* Worth of coupons used End */}
                </div>
                <div className="grid gap-7">
                  <div className=" grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols- gap-5">
                    <LineChartPage />
                    <div className=" grid gap-4">
                      <ProfilPage />
                      <SaleProgressPage />
                    </div>
                  </div>
                  {/* Line Chart End Here */}
                  <AreaChartPage />
                  {/* Total User End Here */}
                </div>
                {/* Sale Progress / Profit / Product Sale - Interactive End Here */}
              </CardContent>
            </Card>
          </TabsContent>
          {/* OverView End */}

          <TabsContent value="salesbyday">
            <Card>
              <CardHeader>
                <div className=" flex flex-row justify-between">
                  <div className="grid gap-2">
                    <CardTitle> Sale by day</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </div>
                  <CalendarDateRangePicker />
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-10">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
                    <div className="rounded-xl border border-dashed border-blue-500 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          $45,231.89
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                          $00
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Gross sales in this period
                        </p>
                      </div>
                    </div>
                    {/* Gross sales End */}
                    <div className="rounded-xl border border-dashed border-emerald-500 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          $0.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                          $00
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Net sales in this period
                        </p>
                      </div>
                    </div>
                    {/* Net sales End */}
                    <div className="rounded-xl border border-dashed border-rose-800 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          200.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-800 leading-none ml-1">
                          $10
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          orders placed
                        </p>
                      </div>
                    </div>
                    {/* Orders Placed End */}
                    <div className="rounded-xl border border-dashed border-pink-500 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          100.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-500 leading-none ml-1">
                          +30
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Items purchased
                        </p>
                      </div>
                    </div>
                    {/* Items Purchased End */}
                    <div className="rounded-xl border border-dashed border-pink-500 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          $00.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-500 leading-none ml-1">
                          -30
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Refunded 0 orders (0 items)
                        </p>
                      </div>
                    </div>
                    {/* Refunded 0 orders End */}
                    <div className="rounded-xl border border-dashed border-pink-800 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          $00.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-pink-800 leading-none ml-1">
                          + 30
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Charged for shipping
                        </p>
                      </div>
                    </div>
                    {/* Charged for Shipping End */}
                    <div className="rounded-xl border border-dashed border-orange-500 bg-card text-card-foreground ">
                      <div className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-2xl tracking-tight font-bold">
                          $00.00
                        </h2>
                        <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-orange-500 leading-none ml-1">
                          + 30
                        </span>
                      </div>
                      <div className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                          Worth of coupons used
                        </p>
                      </div>
                    </div>
                    {/* Worth of coupons used End */}
                  </div>

                  <div className="flex flex-row gap-5">
                    <div className="grid grid-cols-1 w-full gap-5">
                      <SaleProgressPage />
                      <ProfilPage />
                    </div>
                    <div className="w-full">
                      <PieChartpage />
                    </div>
                  </div>

                  <div>
                    <RecentSalePage />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="topselling">
            <Card>
              <CardHeader>
                <div className=" flex flex-row justify-between">
                  <div className="grid gap-2">
                    <CardTitle> Top Sellings</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </div>
                  <CalendarDateRangePicker />
                </div>
              </CardHeader>

              <CardContent>
                <TopSaletable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="topearning">
            <div className="grid gap-10">
              <TopEarningPage />

              <Card>
                <CardHeader>
                  <div className=" flex flex-row justify-between">
                    <div className="grid gap-2">
                      <CardTitle> Top Earning</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </CardDescription>
                    </div>
                    <CalendarDateRangePicker />
                  </div>
                </CardHeader>

                <CardContent>
                  <TopSaletable />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="statement">
          <div className="grid gap-10">
          <Card>
            <CardHeader>
                  <div className=" flex flex-row justify-between">
                    <div className="grid gap-2">
                      <CardTitle> Statment</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. 
                        </CardDescription>
                    </div>
                    <div className="lg:flex xl:flex  lg:flex-row xl:flex-row gap-4">
                      <CalendarDateRangePicker />
                      <Button asChild size="sm" className="ml-auto gap-1  bg-[#E11D47] hover:bg-[#E53B5B]">
                        <Link to="#">
                          View All
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                <Table className="text-center">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>  
          <TableRow>
            <TableHead className="text-center">ID</TableHead>
            <TableHead className="text-center">Balance Date</TableHead>
            <TableHead className="text-center">Trn Date</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Debit</TableHead>
            <TableHead className="text-center">Credit</TableHead>
            <TableHead className="text-center">Balance</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {statments.map((statment) => (
            <TableRow key={statment.ID}>
              <TableCell>{statment.ID}</TableCell>
              <TableCell className="font-medium">{statment.balanceDate}</TableCell>
              <TableCell className="font-medium">{statment.trnDate}</TableCell>

              <TableCell className="text-center">{statment.type}</TableCell>
              <TableCell className="text-center">{statment.debit}</TableCell>
              <TableCell className="text-center">{statment.credit }</TableCell>
              <TableCell className="text-center">{statment.balance }</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="text-left">Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
              </Table>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8  ">
              <div>
                <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                  <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                      <CardTitle>Transactions</CardTitle>
                      <CardDescription>
                        Recent transactions from your store.
                      </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                      <Link to="#">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden xl:table-column">
                            Type
                          </TableHead>
                          <TableHead className="hidden xl:table-column">
                            Status
                          </TableHead>
                          <TableHead className="hidden xl:table-column">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Refund
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Subscription
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-27
                          </TableCell>
                          <TableCell className="text-right">$550.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card x-chunk="statement-01-chunk-5">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          olivia.martin@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Jackson Lee
                        </p>
                        <p className="text-sm text-muted-foreground">
                          jackson.lee@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">
                          isabella.nguyen@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$299.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/04.png" alt="Avatar" />
                        <AvatarFallback>WK</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          William Kim
                        </p>
                        <p className="text-sm text-muted-foreground">
                          will@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$99.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/05.png" alt="Avatar" />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Sofia Davis
                        </p>
                        <p className="text-sm text-muted-foreground">
                          sofia.davis@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div> {/* Transactions & Recent Sale End */}
          </div>
            
          </TabsContent>
        </Tabs>
      </main>
    </DashboardContent>
  );
}

export default AnalyticsPage;
