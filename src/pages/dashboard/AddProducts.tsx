import * as React from "react";
import DashboardContent from "@/components/DashboardContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BadgeHelp,
  ChevronLeft,
  CirclePlus,
  Layers,
  Paperclip,
  PlusCircle,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import {
//   ToggleGroup,
//   ToggleGroupItem,
// } from "@/components/ui/toggle-group"

// File Upload
import { useState } from "react";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/extension/file-upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

{
  /** calender  */
}

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF
      </p>
    </>
  );
};
{
  /* Image Uplooder*/
}

function AddProducts({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  // const [date, setDate] = React.useState<Date>()
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 25,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  return (
    <>
      <DashboardContent>
        <main className="grid flex-1 items-start gap-4 md:gap-8">
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
                  <Link to="#">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Add Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                5″ Monitor with 1080P Backup Camera for Truck
              </h1>
              <Badge
                variant="outline"
                className="ml-auto sm:ml-0 border-green-500 text-green-500"
              >
                In stock
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div>
            </div>
            {/* Product header End */}
            <Card x-chunk="dashboard-07-chunk-00">
              <CardHeader>
                <CardTitle>Product Image</CardTitle>
                <CardDescription>
                  {" "}
                  Please add 25 images of your products.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploader
                  value={files}
                  onValueChange={setFiles}
                  dropzoneOptions={dropZoneConfig}
                  className="relative bg-background rounded-lg p-2 border border-gray-600"
                >
                  <FileInput className="outline-dashed outline-1 outline-white border border-grey-100">
                    <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                      <FileSvgDraw />
                    </div>
                  </FileInput>

                  <FileUploaderContent>
                    {" "}
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </CardContent>
            </Card>{" "}
            {/* Add Product multiple images End */}
            {/* Product Title/ decription / Price / Type  Detail Goes */}
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Product Title</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue=""
                        />
                      </div>
                      {/* Title End */}

                      <div className="grid gap-3">
                        <Label htmlFor="status">Product Type</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Type 1</SelectItem>
                            <SelectItem value="published">Type 2</SelectItem>
                            <SelectItem value="archived">Type 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-row gap-3 justify-between items-center">
                        <div className="grid gap-3 w-full">
                          <Label htmlFor="name">Price *</Label>
                          <Input
                            id="name"
                            type="number"
                            className="w-full"
                            defaultValue="$00"
                          />
                        </div>

                        <div className="grid gap-3 w-full">
                          <Label
                            htmlFor="name"
                            className="flex flex-row items-center"
                          >
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="flex flex-row items-center">
                                  Discounted Price{" "}
                                  <BadgeHelp className="w-4 h-4 ml-1" />{" "}
                                </TooltipTrigger>
                                <TooltipContent className="text-center">
                                  <p className="text-xs leading-4 text-gray-900 font-medium normal-case">
                                    Choose variable if your product has multiple
                                    attributes - <br /> like sizes, colors,
                                    quality etc
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Label>
                          <Input
                            id="name"
                            type="number"
                            className="w-full"
                            defaultValue="Gamer Gear Pro Controller"
                          />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Short Description *</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet,"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, "
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Product detail End */}
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle className="items-center flex flex-row">
                      Attribute{" "}
                      <span className="text-xs font-medium text-gray-400 lg:ml-2 md:ml-2 ml-0">
                        Manage attributes for this simple product.
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="grid gap-3">
                          <Label htmlFor="category">Car Model</Label>
                          <Select>
                            <SelectTrigger
                              id="model"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clothing">Model 1</SelectItem>
                              <SelectItem value="electronics">
                                {" "}
                                Model 2{" "}
                              </SelectItem>
                              <SelectItem value="accessories">
                                {" "}
                                Model 3{" "}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="subcategory">Car Submodel</Label>
                          <Select>
                            <SelectTrigger
                              id="subcategory"
                              aria-label="Select subcategory"
                            >
                              <SelectValue placeholder="Select subcategory" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="t-shirts">
                                Submodel 01
                              </SelectItem>
                              <SelectItem value="hoodies">
                                Submodel 02
                              </SelectItem>
                              <SelectItem value="sweatshirts">
                                {" "}
                                Submodel 03{" "}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Car Make</Label>
                          <Input
                            id="carmake"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="name">Car Year</Label>
                          <Input
                            id="caryear"
                            type="number"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Car Engine</Label>
                          <Input
                            id="crengine"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="name">Condition</Label>
                          <Input
                            id="Condition"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Color</Label>
                          <Input
                            id="Color"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="name">Trim</Label>
                          <Input
                            id="Trim"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Attribute  Categories End */}
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-sm">SKU</TableHead>
                          <TableHead className="text-sm">
                            Stock Status
                          </TableHead>
                          <TableHead className="text-sm">Quantity </TableHead>
                          <TableHead className="text-sm">Disount</TableHead>
                          <TableHead className="text-sm">
                            Allow Backorders{" "}
                          </TableHead>
                          <TableHead className="text-sm">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            <label>GGPC-001 </label>
                          </TableCell>

                          <TableCell className="font-semibold">
                            <label>In-Backorder </label>
                          </TableCell>

                          <TableCell>
                            <label>100 </label>
                          </TableCell>

                          <TableCell>
                            <label>12 </label>
                          </TableCell>

                          <TableCell className="font-semibold">
                            <label>Don't Allow </label>
                          </TableCell>

                          <TableCell>
                            <label>$432 </label>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    {/* <Button size="sm" variant="ghost" className="gap-1 hover:text-white hover:bg-[#E53B5B]">
                      <PlusCircle className="h-3.5 w-3.5" />
                        Add Variant
                    </Button> */}

                    <Dialog>
                      <DialogTrigger>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="gap-1 hover:text-white hover:bg-[#E53B5B] border"
                        >
                          <PlusCircle className="h-3.5 w-3.5" />
                          Add Variant
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="mb-2">
                            Add Variant
                          </DialogTitle>
                          <DialogDescription>
                            <Card x-chunk="dashboard-07-chunk-3">
                              <CardHeader>
                                <CardTitle className="flex flex-row items-center">
                                  <Layers className="w-5 h-5 mr-1" /> Inventory{" "}
                                  <span className="text-xs font-medium text-gray-400 lg:ml-2 md:ml-2 ml-0">
                                    Manage inventory for this product.
                                  </span>
                                </CardTitle>
                                <CardDescription>
                                  Lipsum dolor sit amet, consectetur adipiscing
                                  elit
                                </CardDescription>
                              </CardHeader>

                              <CardContent>
                                <div className="flex flex-row gap-3 justify-between items-center mb-5">
                                  <div className="grid gap-3 w-full">
                                    <Label
                                      htmlFor="skuname"
                                      className="font-normal"
                                    >
                                      {" "}
                                      SKU (Stock Keeping Unit) *{" "}
                                    </Label>
                                    <Input
                                      id="name"
                                      type="number"
                                      className="w-full"
                                      defaultValue="Gamer Gear Pro Controller"
                                    />
                                  </div>

                                  <div className="grid gap-3 w-full">
                                    <Label
                                      htmlFor="status"
                                      className="font-normal"
                                    >
                                      Stock Status *
                                    </Label>
                                    <Select>
                                      <SelectTrigger
                                        id="status"
                                        aria-label="Select status"
                                      >
                                        <SelectValue placeholder="Select status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="draft">
                                          In Stock
                                        </SelectItem>
                                        <SelectItem value="published">
                                          Out of Stock
                                        </SelectItem>
                                        <SelectItem value="archived">
                                          On Backorder
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>

                                <div className="flex flex-row gap-3 justify-between items-center  mb-5">
                                  <div className="grid gap-3 w-full">
                                    <Label
                                      htmlFor="quantity"
                                      className="font-normal"
                                    >
                                      Stock quantity *{" "}
                                    </Label>
                                    <Input
                                      id="name"
                                      type="number"
                                      className="w-full"
                                      defaultValue="Gamer Gear Pro Controller"
                                    />
                                  </div>

                                  <div className="grid gap-3 w-full">
                                    <Label htmlFor="" className="font-normal">
                                      Low stock threshold *{" "}
                                    </Label>
                                    <Input
                                      id="name"
                                      type="number"
                                      className="w-full"
                                      defaultValue="Gamer Gear Pro Controller"
                                    />
                                  </div>
                                </div>

                                <div className="grid gap-3 w-full mb-5">
                                  <Label
                                    htmlFor="backorders"
                                    className="font-normal"
                                  >
                                    Allow Backorders *
                                  </Label>
                                  <Select>
                                    <SelectTrigger
                                      id="status"
                                      aria-label="Select status"
                                    >
                                      <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="draft">
                                        Do not allow
                                      </SelectItem>
                                      <SelectItem value="published">
                                        Allow
                                      </SelectItem>
                                      <SelectItem value="archived">
                                        Allow but notify customer
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Allow only one quantity of this product to
                                    be bought in a single order
                                  </label>
                                </div>

                                <Button className="mt-4 bg-[#E11D47] hover:bg-[#E53B5B]">
                                  Done
                                </Button>
                              </CardContent>
                            </Card>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
                {/* SKU & Stock End */}
                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader>
                    <CardTitle> Shipping and Tax </CardTitle>
                    <CardDescription>
                      Manage shipping and tax for this product
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="grid gap-3">
                          <Label htmlFor="category">Tax Status *</Label>
                          <Select>
                            <SelectTrigger
                              id="model"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clothing">Taxable</SelectItem>
                              <SelectItem value="electronics">
                                {" "}
                                Shipping Only{" "}
                              </SelectItem>
                              <SelectItem value="accessories">
                                {" "}
                                None{" "}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-3">
                          <Label htmlFor="category">Tax Class * *</Label>
                          <Select>
                            <SelectTrigger
                              id="model"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clothing">Standard</SelectItem>
                              <SelectItem value="electronics">
                                {" "}
                                Reduced Rate{" "}
                              </SelectItem>
                              <SelectItem value="accessories">
                                {" "}
                                Zero Rate{" "}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="gap-1 hover:bg-transparent"
                        >
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            This product requires shipping
                          </label>
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="mb-2">
                            Add Variant
                          </DialogTitle>
                          <DialogDescription>
                            <Card x-chunk="dashboard-07-chunk-5">
                              <CardHeader>
                                <CardTitle className="flex flex-row items-center">
                                  <Truck className="w-5 h-5 mr-1" /> Shipping
                                  and Tax
                                </CardTitle>
                                <CardDescription>
                                  {" "}
                                  Manage shipping and tax for this product{" "}
                                </CardDescription>
                              </CardHeader>

                              <CardContent>
                                <div className="grid gap-3">
                                  <div className="flex flex-row gap-3 justify-between items-center">
                                    <div className="grid gap-3 w-full">
                                      <Label
                                        htmlFor="skuname"
                                        className="font-normal"
                                      >
                                        {" "}
                                        Weight (kg) *{" "}
                                      </Label>
                                      <Input
                                        id="name"
                                        type="number"
                                        className="w-full"
                                        defaultValue="Gamer Gear Pro Controller"
                                      />
                                    </div>

                                    <div className="grid gap-3 w-full">
                                      <Label
                                        htmlFor="status"
                                        className="font-normal"
                                      >
                                        Length (cm) *
                                      </Label>
                                      <Input
                                        id="name"
                                        type="number"
                                        className="w-full"
                                        defaultValue="Gamer Gear Pro Controller"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex flex-row gap-3 justify-between items-center">
                                    <div className="grid gap-3 w-full">
                                      <Label htmlFor="quantity">
                                        Width (cm) *{" "}
                                      </Label>
                                      <Input
                                        id="name"
                                        type="number"
                                        className="w-full"
                                        defaultValue="Gamer Gear Pro Controller"
                                      />
                                    </div>

                                    <div className="grid gap-3 w-full">
                                      <Label htmlFor="">Height (cm) * </Label>
                                      <Input
                                        id="name"
                                        type="number"
                                        className="w-full"
                                        defaultValue="Gamer Gear Pro Controller"
                                      />
                                    </div>
                                  </div>

                                  <div className="grid gap-3 w-full mb-5">
                                    <Label
                                      htmlFor="backorders"
                                      className="font-normal"
                                    >
                                      Shipping Class *
                                    </Label>
                                    <Select>
                                      <SelectTrigger
                                        id="status"
                                        aria-label="Select status"
                                      >
                                        <SelectValue placeholder="Select status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="draft">
                                          No Class Shipping ($0)
                                        </SelectItem>
                                        <SelectItem value="published">
                                          Allow
                                        </SelectItem>
                                        <SelectItem value="archived">
                                          Allow but notify customer
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </CardContent>

                              <CardFooter>
                                <Button className="mt-4 bg-[#E11D47] hover:bg-[#E53B5B]">
                                  Done
                                </Button>
                              </CardFooter>
                            </Card>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <div className="grid gap-3 pl-3">
                      <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Shipping classes are used by certain shipping methods to
                        group similar products. Before adding a product, please
                        configure the shipping settings.
                      </p>
                    </div>
                  </CardFooter>
                </Card>{" "}
                {/* Shipping and Tax End */}
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-6">
                  <CardHeader>
                    <CardTitle> Discount Options </CardTitle>
                    <CardDescription>
                      Set Your discount for this product{" "}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Minimum quantity *</Label>
                        <Input
                          id="quantity"
                          type="number"
                          className="w-full"
                          defaultValue=""
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="category">Discount % *</Label>
                        <Input
                          id="discount"
                          type="number"
                          className="w-full"
                          defaultValue=""
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label
                          htmlFor="category"
                          className="text-sm font-normal"
                        >
                          Shipping classes are used by certain shipping methods
                          to group similar products. Before adding a product,
                          please configure the shipping settings.
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>{" "}
                {/* Discount Options End */}
                <Card x-chunk="dashboard-07-chunk-7">
                  <CardHeader>
                    <CardTitle>Linked Products</CardTitle>
                    <CardDescription>
                      Set your linked products for upsell and cross-sells
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid gap-3">
                      <div className="grid gap-3 w-full">
                        <Label
                          htmlFor="name"
                          className="flex flex-row items-center"
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="flex flex-row items-center">
                                Upsells
                                <BadgeHelp className="w-4 h-4 ml-1" />{" "}
                              </TooltipTrigger>
                              <TooltipContent className="text-center">
                                <p className="text-xs leading-4 text-gray-900 font-medium normal-case">
                                  Upsells are products which you recommend
                                  instead of the currently viewed product -
                                  <br /> for example: products that are more
                                  profitable or better quality or more
                                  expensive.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          id="name"
                          type=""
                          className="w-full"
                          defaultValue=""
                        />
                      </div>

                      <div className="grid gap-3 w-full">
                        <Label
                          htmlFor="name"
                          className="flex flex-row items-center"
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="flex flex-row items-center">
                                Cross-sells
                                <BadgeHelp className="w-4 h-4 ml-1" />{" "}
                              </TooltipTrigger>
                              <TooltipContent className="text-center">
                                <p className="text-xs leading-4 text-gray-900 font-medium normal-case">
                                  Cross-sells are products which you promote in
                                  the cart,
                                  <br />
                                  based on the current product.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          id="name"
                          type=""
                          className="w-full"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Linked Products End  */}
                <Card x-chunk="dashboard-07-chunk-8">
                  <CardHeader>
                    <CardTitle>Schedule</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className={cn("grid gap-2 mb-5", className)}>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              " justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#E11D47] hover:bg-[#E53B5B] text-white border-white hover:text-white"
                    >
                      <CirclePlus className="w-5 h-5 mr-1" /> Add New Category
                    </Button>
                  </CardContent>
                </Card>
                {/* Schedule End  */}
                <Card x-chunk="dashboard-07-chunk-9">
                  <CardHeader>
                    <CardTitle> Other Options </CardTitle>
                    <CardDescription>
                      Set your extra product options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Product Status *</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Online</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="category">Visibility *</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Visible</SelectItem>
                            <SelectItem value="published">Catalog</SelectItem>
                            <SelectItem value="published">Search</SelectItem>
                            <SelectItem value="published">Hidden</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="category">Purchase Note *</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet,"
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Enable product reviews
                      </label>
                    </div>
                  </CardFooter>
                </Card>{" "}
                {/* Other Option End  */}
              </div>{" "}
              {/* Right Side Card End */}
            </div>
            {/*  Product Title/ decription / Price / Type  / Schedule / Add category Detail End */}
          </div>
        </main>
      </DashboardContent>
    </>
  );
}

export default AddProducts;
