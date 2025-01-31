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

const AllUsers = ({ submission, type, publishvalue }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Type</TableHead>

            <TableHead>Email</TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submission && submission.length > 0 ? (
            submission
              .filter(
                (invoice) =>
                  invoice.type.toLowerCase().includes(type) &&
                  invoice.publish === publishvalue
              )
              .map((invoice) => (
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
                          ? `bg-green-400 `
                          : "bg-gray-500 hidden"
                      }
                    >
                      <Link href={`/dashboard/submission/${invoice.id}`}>
                        Review
                      </Link>
                    </Button>
                    <Button
                      className={
                        invoice.publish === true
                          ? `bg-green-400 `
                          : "bg-gray-500 hidden"
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

export default AllUsers;
