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
import { Input } from "@/components/ui/input";
import Link from "next/link";
const AllSubmission = ({ submissions }) => {
 
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Type</TableHead>

            <TableHead>Send Notification</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions && submissions.length > 0 ? (
            submissions.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">
                  {invoice.fullname}
                </TableCell>
                <TableCell>{invoice.type.toUpperCase()}</TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell className="gap-2 flex space-x-2">
                  <Button
                    className={
                      invoice.publish === false
                        ? `bg-green-400`
                        : "bg-gray-500"
                    }
                  >
                    <Link href={`/dashboard/submission/${invoice.id}`}>
                      Review
                    </Link>
                  </Button>
                  <Button
                    className={
                      invoice.publish === true ? `bg-green-400` : "bg-gray-500"
                    }
                  >
                    <Link href={`/dashboard/submission/${invoice.id}`}>
                      Live
                    </Link>
                  </Button>
                  {invoice.published && (
                    <Button className="bg-gray-400">Published</Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllSubmission;
