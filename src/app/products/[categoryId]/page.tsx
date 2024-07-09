"use client";

import { NextPage } from "next";
import ProductGrid from "../components/ProductGrid";
import productImageTest from "/public/productImages/image.png";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import { useState } from "react";
import FeatureIcons from "../components/FeatureIcons";

interface Params {
  categoryId: string;
}

interface PageProps {
  params: Params;
}

const productSample = {
  id: "",
  name: "MacBook 1",
  image: productImageTest,
  price: 45,
  rating: 4.6,
  discount: 25,
};

function generateSampleArray<T extends { id: string }>(
  amount: number,
  sampleObject: T
): T[] {
  return Array.from({ length: amount }, (_, index) => ({
    ...sampleObject,
    id: index.toString(),
  }));
}
const Page: NextPage<PageProps> = ({ params }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add your logic here
  };
  return (
    <div>
      {params.categoryId}
      <SortDropdown />
      <ProductGrid products={generateSampleArray(30, productSample)} />

      {/*  */}
      {/* current Page and total pages should be tracked with a state */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <FeatureIcons />
    </div>
  );
};

export default Page;
