import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "../../ui/button";
import Link from "next/link";

const CallbackList = ({ callbaklist }) => {
console.log(callbaklist)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead>Email</TableHead>

          <TableHead>Contanct</TableHead>
          <TableHead>Enquiry about</TableHead>

          <TableHead className="">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {callbaklist.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.fullname}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.phone}</TableCell>

            <TableCell>{invoice.submission.fullname}</TableCell>
            <TableCell className="gap-2 flex space-x-2">
              <Button className="bg-blue-400">
                <Link href={`/dashboard/callback/${invoice.id}`}>View</Link>
              </Button>
              <Button className="bg-green-400">Send Email Notification</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CallbackList;
