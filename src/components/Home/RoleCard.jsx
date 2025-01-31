import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';

const RoleCard = ({role,subheading,buttontext}) => {
  return (
    <Card className='bg-black'>
      <CardHeader>
        <CardTitle className="flex justify-start items-center text-blue-500">
          <span className='text-2xl font-extrabold'>#</span>
          {role}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl text-white">
         {subheading}
        </p>
      </CardContent>
      <CardFooter>
        <Button className='text-white bg-blue-500' >{buttontext} </Button>
      </CardFooter>
    </Card>
  );
}

export default RoleCard