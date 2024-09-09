import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

function EditSettings() {
  const form = useForm({});

  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 ">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Store Settings</h1>
      </div>

      <div className="">
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Store Name</CardTitle>
                  <CardDescription>
                    Used to identify your store in the marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form>
                      <div>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Store Name
                            </label>
                            <Input placeholder="Store Name" />
                          </div>

                          <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                About Store *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                                Address
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Street *
                                </label>
                                <Input placeholder="Enter House no & Street name" />
                              </div>

                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Street 2 *
                                </label>
                                <Input placeholder="Enter Apartment, suite, unit etc" />
                              </div>
                            </div>
                            {/* Street Addess End */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  City *
                                </label>
                                <Input placeholder="Enter City Name" />
                              </div>

                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Post/ZIP Code *
                                </label>
                                <Input
                                  placeholder="Enter Postal Code"
                                  type="number"
                                />
                              </div>
                            </div>
                            {/* City Postal code End */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Country *
                                </label>
                                <Input placeholder="Enter Country" />
                              </div>

                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Phone Number *
                                </label>
                                <Input
                                  placeholder="Enter Phone Number"
                                  type="Number"
                                />
                              </div>
                            </div>
                            {/* Country & Phone Number End */}
                          </div>
                          {/* Address End */}
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                                Terms and Conditions
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                TOC Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
                          {/* Terms and Conditions End */}
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                                Store Schedule
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                TOC Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
                          {/* Store Schedule End */}
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                                Remove Add to Cart Button
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid gap-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                  htmlFor="terms"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Check to remove add to cart option from your
                                  products.
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Remove Add to Cart Button */}
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                                Discount
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Minimum Order Amount *
                                </label>
                                <Input
                                  placeholder="Enter Minimum Order Amount "
                                  type="number"
                                />
                              </div>

                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Percentage *
                                </label>
                                <Input
                                  placeholder="Enter Percentage "
                                  type="Number"
                                />
                              </div>
                            </div>

                            <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Biography *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>

                            <div className="grid gap-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                  htmlFor="terms"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Enable storewide discount
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Discount End */}
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex flex-row gap-5 justify-end">
                  <Button type="submit"> Save </Button>
                  <Button
                    type="submit"
                    className=" bg-white border border-gray-500 text-gray-800 hover:bg-white"
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>

              {/* <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Store Name</CardTitle>
                  <CardDescription>
                    Used to identify your store in the marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <Input placeholder="Store Name" />
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                  <CardTitle>Plugins Directory</CardTitle>
                  <CardDescription>
                    The directory within your project, in which your plugins are
                    located.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Input
                      className="focus-visible:!ring-1 focus-visible:ring-[#E11D47] focus-visible:!ring-offset-1"
                      placeholder="Store Name"
                      defaultValue=""
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include" defaultChecked />
                      <label
                        htmlFor="include"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Allow administrators to change the directory.
                      </label>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card> */}
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default EditSettings;
