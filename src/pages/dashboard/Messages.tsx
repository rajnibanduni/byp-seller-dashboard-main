import DashboardContent from "@/components/DashboardContent";
import { Link } from "react-router-dom";


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
import { Button } from "@/components/ui/button";
import { Reply } from "lucide-react";
function MessagesPage() {
 
  return (
    <DashboardContent title="Inbox">
        <main className="grid flex-1 items-start gap-4 md:gap-8 w-full">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Inbox</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="#">Messages</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid gap-5">
        <div className="flex flex-row justify-between gap-5">
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
                <div className="grid flex-1 gap-2 text-center sm:text-left">
                  <CardTitle className="flex flex-cols justify-between">
                      <span className="text-lg text-slate-700 "> User Name </span>
                      <span className="text-xs font-normal text-black flex flex-row items-center"> 
                        1 hour ago
                          <Button className="bg-transparent hover:bg-transparent text-gray-600 ">
                            <Reply  className="w-4"/>
                          </Button>
                      </span>
                  </CardTitle>
                  <CardDescription> 
                    <div className="flex flex-row justify-between">
                      
                    <div>
                      <h4 className="font-medium text-gray-400 text-xs mb-1">Message Title </h4>
                      <h6 className="font-medium text-black text-xs">01-10-2024<span className="font-medium text-slate-600 text-xs ml-1">12:00 pm </span></h6>
                    </div> 
                    </div>
                  </CardDescription>
                </div>

               
                 
            </CardHeader>

            <CardContent>
                <div className="flex-1 whitespace-pre-wrap text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit sit consectetur tempora iure quisquam, veritatis beatae placeat doloremque! Magnam, error minus! Veritatis, dolorem libero. Doloremque minus quisquam labore perspiciatis?</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
                <div className="grid flex-1 gap-2 text-center sm:text-left">
                  <CardTitle className="flex flex-cols justify-between">
                      <span className="text-lg text-slate-700 "> User Name </span>
                      <span className="text-xs font-normal text-black flex flex-row items-center"> 
                        1 hour ago
                          <Button className="bg-transparent hover:bg-transparent text-gray-600 ">
                            <Reply  className="w-4"/>
                          </Button>
                      </span>
                  </CardTitle>
                  <CardDescription> 
                    <div className="flex flex-row justify-between">
                      
                    <div>
                      <h4 className="font-medium text-gray-400 text-xs mb-1">Message Title </h4>
                      <h6 className="font-medium text-black text-xs">01-10-2024<span className="font-medium text-slate-600 text-xs ml-1">12:00 pm </span></h6>
                    </div> 
                    </div>
                  </CardDescription>
                </div>

               
                 
            </CardHeader>

            <CardContent>
                <div className="flex-1 whitespace-pre-wrap text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit sit consectetur tempora iure quisquam, veritatis beatae placeat doloremque! Magnam, error minus! Veritatis, dolorem libero. Doloremque minus quisquam labore perspiciatis?</p>
                </div>
            </CardContent>
        </Card>
        </div>

        <div className="flex flex-row justify-between gap-5">
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
                <div className="grid flex-1 gap-2 text-center sm:text-left">
                  <CardTitle className="flex flex-cols justify-between">
                      <span className="text-lg text-slate-700 "> User Name </span>
                      <span className="text-xs font-normal text-black flex flex-row items-center"> 
                        1 hour ago
                          <Button className="bg-transparent hover:bg-transparent text-gray-600 ">
                            <Reply  className="w-4"/>
                          </Button>
                      </span>
                  </CardTitle>
                  <CardDescription> 
                    <div className="flex flex-row justify-between">
                      
                    <div>
                      <h4 className="font-medium text-gray-400 text-xs mb-1">Message Title </h4>
                      <h6 className="font-medium text-black text-xs">01-10-2024<span className="font-medium text-slate-600 text-xs ml-1">12:00 pm </span></h6>
                    </div> 
                    </div>
                  </CardDescription>
                </div>

               
                 
            </CardHeader>

            <CardContent>
                <div className="flex-1 whitespace-pre-wrap text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit sit consectetur tempora iure quisquam, veritatis beatae placeat doloremque! Magnam, error minus! Veritatis, dolorem libero. Doloremque minus quisquam labore perspiciatis?</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
                <div className="grid flex-1 gap-2 text-center sm:text-left">
                  <CardTitle className="flex flex-cols justify-between">
                      <span className="text-lg text-slate-700 "> User Name </span>
                      <span className="text-xs font-normal text-black flex flex-row items-center"> 
                        1 hour ago
                          <Button className="bg-transparent hover:bg-transparent text-gray-600 ">
                            <Reply  className="w-4"/>
                          </Button>
                      </span>
                  </CardTitle>
                  <CardDescription> 
                    <div className="flex flex-row justify-between">
                      
                    <div>
                      <h4 className="font-medium text-gray-400 text-xs mb-1">Message Title </h4>
                      <h6 className="font-medium text-black text-xs">01-10-2024<span className="font-medium text-slate-600 text-xs ml-1">12:00 pm </span></h6>
                    </div> 
                    </div>
                  </CardDescription>
                </div>

               
                 
            </CardHeader>

            <CardContent>
                <div className="flex-1 whitespace-pre-wrap text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit sit consectetur tempora iure quisquam, veritatis beatae placeat doloremque! Magnam, error minus! Veritatis, dolorem libero. Doloremque minus quisquam labore perspiciatis?</p>
                </div>
            </CardContent>
        </Card>
        </div>

         
        </div>
        </main>
    </DashboardContent>
    
  );
}

export default MessagesPage;
