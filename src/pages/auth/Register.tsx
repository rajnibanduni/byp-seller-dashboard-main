import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldType } from "@/constants/form";
import { LoginSchema } from "@/validators/auth-validator";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import { useAuth } from "@/components/AuthProvider";
// import { Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";


function RegisterPage() {

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
  <div className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10">
    <div
      className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">

            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://buyurparts.vercel.app/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Buyurparts Team
                  </h4>
                </div>
                
                <Form {...form}>
                     <form className="flex items-center justify-center py-12" >
                      <div>
                        <div className="lg:mx-auto md:mx-auto grid lg:w-[450px] md:w-[450px] gap-6">
                          <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Seller Register</h1>
                            <p className="text-gray-600 text-sm text-muted-foreground"> Enter your information to create an account</p>
                            <div className="w-full bg-gray-100 py-3 mt-4 text-center text-sm"> Already have an account?{" "}
                          <Link to="/auth/login" className="hover:underline hover:text-rose-800 hover:font-semibold transition ease-in-out delay-150 ">
                            Sign in
                          </Link>
                        </div>
                          </div>
                          
                          <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name" placeholder="John" />
                              </div>
                                
                                <div className="grid gap-2">
                                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" placeholder="Robinson" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                              <CustomFormField
                                fieldType={FormFieldType.EMAIL_INPUT}
                               control={form.control}
                                name="email"
                                label="Email"
                                placeholder="m@example.com"
                              />
                            </div>
                            
                            <div className="grid gap-2">
                              <CustomFormField
                              fieldType={FormFieldType.PASSWORD_INPUT}
                              control={form.control}
                              name="password"
                              label="Password"
                              placeholder="Enter password"
                              />
                            </div>

                            <div className="flex items-start space-x-2">
                            <Checkbox id="terms" className="mt-1"/> 
                            <label htmlFor="terms" className="text-sm text-gray-500 dark:text-gray-400">By signing up, you are creating a Buyurparts account, and you agree to buyurparts’s
                            <Link to="#" className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Terms of Use</Link> and <Link to="#" className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Privacy Policy</Link></label>
                          </div>

                          <div className="flex items-start space-x-2 mb-5">
                            <Checkbox id="terms" className="mt-1"/> 
                            <label htmlFor="terms" className="text-sm text-gray-500 dark:text-gray-400">Email me about product updates and resources.</label>
                          </div>

                            <Button type="submit"  className="w-full" > Create an account</Button>
                            <Button type="submit"  className="w-full bg-white border border-gray-500 text-gray-800 hover:bg-white" > Sign up With gmail</Button>
                          </div>  
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>


            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default RegisterPage;