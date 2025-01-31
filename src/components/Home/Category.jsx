import React from "react";
import { categories } from "@/utils/categories";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <section className="overflow-x-auto">
      <ScrollArea className="py-4 whitespace-nowrap">
        <div className="flex gap-x-4 w-max">
          {categories.map((item) => {
            const isActive = item.label === category;

            return (
              <Link key={item.label} href={`/${item.link}`}>
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.icon({ className: "w-8 h-8" })}
                  <p className="capitalize text-sm mt-1">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </section>
  );
};

export default Category;
