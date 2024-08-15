"use client";

import React, { useEffect } from "react";
import { useIntersection } from "react-use";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
