import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropDownPosition = ({ menu,heading }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-black px-4 py-1 w-full text-white">
        {heading} 
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Panel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menu && menu.length > 0 ? (
          menu.map((list, index) => (
            <DropdownMenuItem key={index}>{list}</DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem>Nothing to Select</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownPosition;
