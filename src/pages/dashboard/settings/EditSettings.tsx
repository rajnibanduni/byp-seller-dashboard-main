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
            <TabsTrigger value="termsandconditions">Terms and Conditions</TabsTrigger>
            <TabsTrigger value="returnpollicy">Return Pollicy</TabsTrigger>
            <TabsTrigger value="shippingpolicy">Shipping Policy</TabsTrigger>



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
                                  Return Pollicy
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Return Pollicy Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
                          {/* Return Pollicy End */}
                          
                          <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                            <div className="border-b ">
                              <h2 className="py-4 text-2xl font-semibold leading-none tracking-tight">
                              Shipping Policy
                              </h2>
                              <p className="text-sm text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum sed tenetur ipsam
                                veritatis at
                              </p>
                            </div>

                            <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Shipping Pollicy Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
                          {/* Shipping policy Edn */}

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

              
            </div>
          </TabsContent>
          <TabsContent value="password">
          <div className="geid gap-5">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-row gap-2 items-center">
                      Reset Password
                      
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
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="name@company.com"
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
                              placeholder="••••••••"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                              placeholder="••••••••"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="newsletter"
                                aria-describedby="newsletter"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="newsletter"
                                className="font-light text-gray-500 dark:text-gray-300"
                              >
                                I accept the{" "}
                                <a
                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                  href="#"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className=" text-white  bg-[#E11D47] hover:bg-[#E53B5B] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Reset passwod
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="termsandconditions">
            <Card>
              <CardHeader>
              <CardTitle> Terms and Conditions</CardTitle>
                <CardDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                 <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                TOC Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
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
          {/* <Form {...form}>
                    <form> */}
          </TabsContent>

          <TabsContent value="returnpollicy">
            <Card>
              <CardHeader>
              <CardTitle> Return Pollicy</CardTitle>
                <CardDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                 <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Return Pollicy Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
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
          {/* <Form {...form}>
                    <form> */}
          </TabsContent>

          <TabsContent value="shippingpolicy">
            <Card>
              <CardHeader>
              <CardTitle> Shipping Policy</CardTitle>
                <CardDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <div className=" p-4 border border-gray-200 rounded-lg grid gap-5">
                 <div className="grid gap-2">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Shipping Policy Details *
                              </label>
                              <Textarea placeholder="Type your message here." />
                            </div>
                          </div>
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
          {/* <Form {...form}>
                    <form> */}
          </TabsContent>


        </Tabs>
      </div>
    </main>
  );
}

export default EditSettings;
