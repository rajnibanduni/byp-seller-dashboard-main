

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { PlusCircle, Search, File, ListFilter, Eye, Files, Truck, Copy, MoreVertical, ChevronLeft, CreditCard, ChevronRight } from "lucide-react";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { Progress } from "@radix-ui/react-progress";
import { Badge } from "@/components/ui/badge"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card" 

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    // BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
// import React from "react";
import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import DashboardContent from "@/components/DashboardContent";
import { Link } from "react-router-dom";

 

function OrdersPage() {
  // const [progress, setProgress] = React.useState(13)
  // React.useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
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
          <Link to="#">Orders</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      
    </BreadcrumbList>
  </Breadcrumb>

 
       {/* if order page is balnk then this code shown in dashboard */}
     <main className="flex flex-1 flex-col gap-4  lg:gap-6 ">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Order</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center my-5">
              <h3 className="text-2xl font-bold tracking-tight">
               No order has been made yet
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4 bg-[#E11D47] hover:bg-[#E53B5B]">Browse Product</Button>
            </div>
          </div>
        </main>

     {/* if order page is Not balnk then this code shown in dashboard */}
    <div className="">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Order</h1>
        </div>
        
        {/* Header Section Goes */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background lg:px-0 md:px-0 sm:static sm:h-auto sm:border-0 sm:bg-transparent px-6 mb-6">
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          {/* Search Bar End */}
          
            <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
            </Button>

            <Button size="sm" className="h-8 gap-1 bg-[#E11D47] hover:bg-[#E53B5B]">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
        </header>
        {/* Header Section End */}

        {/* Main Content Goes  */}
        <main className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div>
                {/* Add New Order Section Goes */}
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0" >
                    <CardHeader className="pb-3">
                        <CardTitle>Your Orders</CardTitle>
                        <CardDescription className="text-balance leading-relaxed">
                          Introducing Our Dynamic Orders Dashboard for Seamless
                          Management and Insightful Analysis.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="bg-[#E11D47] hover:bg-[#E53B5B]">Create New Order</Button>
                    </CardFooter>
                </Card>
              {/* Add New Order Section End */}
            </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2">
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                    {/* <Progress value={25} aria-label="25% increase" /> */}
                </CardFooter>
                {/* Progress Not Showing */}
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Progress value={12} aria-label="12% increase" /> Progress Not Showing */}
                </CardFooter>
              </Card>
        </div>

        <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                {/* Oder Detail According to Week / Month / year End */}
               
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* Filter Button End */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                  {/* Export Button End Here */}
                </div>
              </div>
              {/* Order Filter End Here */}
              
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table className="item-c">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order</TableHead>
                          <TableHead className="hidden sm:table-cell"> Date </TableHead>
                          <TableHead className="hidden sm:table-cell"> Status</TableHead>
                          <TableHead className="hidden sm:table-cell"> Shipment </TableHead>
                          <TableHead className="text-right"> Total </TableHead>
                          <TableHead className="hidden sm:table-cell">Amount</TableHead>
                          <TableHead className="text-right">Actions</TableHead>

                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">#11731</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">2023-06-23 </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            --
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$1.06 for 1 item </TableCell>
                          <TableCell className="text-right">$250.00 </TableCell>

                          <TableCell className="text-right">
                          <div className="flex gap-4">
                            <Eye className="w-5 h-5 text-gray-500 hover:text-[#E1201D]" />
                            <Files className="w-5 h-5 text-gray-500 hover:text-[#E1201D]"/>
                          </div>
                          </TableCell>


                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">#120439</div> 
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                           2023-06-24
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                             --
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$2.06 for 2 item</TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-4">
                              <Eye className="w-5 h-5 text-gray-500 hover:text-[#E1201D]" />
                              <Files className="w-5 h-5 text-gray-500 hover:text-[#E1201D]"/>
                            </div>
                          </TableCell>
                          

                        </TableRow>
 
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
        </Tabs>
        </div> {/* Right Side Content */}

        <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Order Oe31b70H
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: November 23, 2023</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">liam@acme.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>{/* Lefy Side Content */}

        </main>
      

        </div> 

    

       
    </>
  );
}

export default OrdersPage;
