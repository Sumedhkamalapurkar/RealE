
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


export function HorizontalCard() {
  return (
    <Card className="max-w-[65rem] flex-row p-4 h-[350px] w-[1024px]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/4 shrink-0 rounded-lg"
      >
        <img
          src="https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>


      <CardBody className="p-4">
        <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></div>
        <div className="flex justify-end items-center "><i class="fa-regular fa-heart mr-3"></i>
        <i class="fa-solid fa-share"></i>
        </div>
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-base font-semibold"
        >
          <a className="underline flex justify-start" href="#">
            2BHK Apartment for Sale in Mangalmurti Residency
          </a>
          
        </Typography>
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 font-medium text-sm"
        >
          <a className="flex" href="#">
            Mangalmurti Residency
          </a>
        </Typography>


        <div className="flex-col border border-solid rounded-lg border-gray-400 shadow-lg">
          <div className="flex justify-evenly p-2">
            <div>
              <div className="text-xs uppercase">SUPER AREA</div>
              <div className="text-xs font-semibold">921 sqft</div>
            </div>

<div>
              <div className="text-xs uppercase">UNDER CONSTRUCTION</div>
              <div className="text-xs font-semibold">Poss. by May 27</div>
            </div>


            <div>
              <div className="text-xs uppercase">TRANSACTION</div>
              <div className="text-xs font-semibold">New Property</div>
            </div>
          </div>


          <div className="flex justify-evenly p-2">
            <div>
              <div className="text-xs uppercase">FURNISHING</div>
              <div className="text-xs font-semibold">Unfurnished</div>
            </div>


            <div>
              <div className="text-xs uppercase">SOCIETY</div>
              <div className="text-xs font-semibold">Mangalmurti Residency</div>
            </div>


            <div>
              <div className="text-xs uppercase">CAR PARKING</div>
              <div className="text-xs font-semibold">1 Open</div>
            </div>
          </div>
        </div>


        <div className="font-normal text-xs pt-4 mt-8">
          Devparth Construction LLP is coming up with its first project in the
          name of Mangalmurti Residency. This building comprises with a micro
          township plan having
        </div>
      </CardBody>


      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/5 shrink-0 rounded-r-none flex flex-col gap-4"
      >
        <h1 className="text-lg font-semibold">₹35.1 Lac</h1>
        <h3 className="text-xs font-normal -mt-5 mb-10">₹3,900 per sqft</h3>
        <Button className="text-red-400 bg-color-white border border-red-700 rounded-full ">
          Request Callback
        </Button>
        <Button className="rounded-full bg-red-700">Get Info</Button>
        <a href="#" className="inline-block underline">
          Check Affordibility
        </a>
        <a className="text-sm font-medium mt-5 " href="#">Builder:Devprath Constr...</a>
      </CardHeader>
    </Card>
  );
}