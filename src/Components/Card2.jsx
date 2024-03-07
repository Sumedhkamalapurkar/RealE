import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";
   
  export function HorizontalCard() {
    return (
        
      <Card className="w-full max-w-[48rem] ">
        <div>1.2</div>

        <CardHeader
          
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          
        </CardHeader>
        <CardBody shadow={false}
        floated={false} className="flex flex-row">
          <div className="w-full max-w-[20rem]">
          <img className="m-0 w-2/5 shrink-0 rounded-r-none  w-full object-cover rounded-xl"
            src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/08/11/Project-Photo-35-Mangalmurti-Residency-Nagpur-5336259_1200_1600_0_320.jpg"
            alt="card-image"
          />
          <div className="flex m-2 space-x-2">
          <img className="w-40" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2023/08/11/Project-Photo-37-Mangalmurti-Residency-Nagpur-5336259_1200_1600_0_320.jpg" alt="Building2"/>
          <img className="w-40" src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/09/08/Project-Photo-16-Mangalmurti-Reside-Nagpur-5336259_1200_1600_0_320.jpg" alt="Building3" />
          </div>
          </div>
          <Typography variant="h6"  color="gray" className="mb-4 p-5  bg-gray-100 rounded-md">
            <div><ul className="flex space-x-4">
                <li>
                    <span>2</span> Beds
                </li>
                <li><span> 2</span> Baths</li>
                <li>Unfurnished</li>
                </ul>
                 </div>
                 </Typography>
                 <Typography variant="h4" color="blue-gray" className="mb-2 text-sm font-normal">
                 <div>
                    <ul className="flex flex-wrap space-x-2 gap-4">
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                        <li>
                            <div>Super Built-up Area</div>
                            <div className="flex">
                                <div>901<span>sqft<span className="flex">sqft</span>
                                </span></div>
                                <div><span>$</span>3900/sqft</div>
                            </div>
                        </li>
                    </ul>
                 </div>
          </Typography>
          
          
        </CardBody>
        {/* <CardFooter>
         <div className="flex w-max gap-4">
      <Button className="rounded-full w-40" color="red">Contact Builder</Button>
      <Button  className="rounded-full " variant="outlined">Download Brouchure</Button>
      </div>
        </CardFooter> */}
      
       
      </Card>
    );
  }