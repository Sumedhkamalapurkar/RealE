import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
   
  export function BookingCard() {
    return ( 
        
      <Card className="w-full max-w-[48rem] shadow-lg">
        <div className="flex-row">
        <div className="sticky">1.2 Cr</div>
        <CardHeader floated={false} 
         className="m-0 w-2/5 shrink-0 rounded-r-none">
          <img className="w -96"
            src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/08/11/Project-Photo-35-Mangalmurti-Residency-Nagpur-5336259_1200_1600_0_320.jpg"
            alt="ui/ux review check"
          />
          <div className="flex m-2 space-x-2">
          <img className="w-40" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/08/11/Project-Photo-37-Mangalmurti-Residency-Nagpur-5336259_1200_1600_0_320.jpg" alt="Building2"/>
          <img className="w-40" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/09/08/Project-Photo-16-Mangalmurti-Reside-Nagpur-5336259_1200_1600_0_320.jpg" alt="Building3" />
          </div>
         
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          
        </CardHeader>
        <CardBody>
            <div>s</div>
          </CardBody>
   
        </div>
               <CardFooter>
          
            <div className="flex w-max gap-4">
      <Button className="rounded-full" color="red">Contact Builder</Button>
      <Button  className="rounded-full" variant="outlined">Download Brouchure</Button>
      </div>

            </CardFooter>
        
      </Card>
    );
  }