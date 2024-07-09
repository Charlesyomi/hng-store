import { NextPage } from "next";
import ProductDetails from "./components/ProductDetails";
import ProductsCarousel from "../../components/ProductsCarousel";

interface Params {
  productId: string;
}
interface PageProps {
  params: Params;
}

const productData = {
  images: [
    { src: "/productImages/image.png", alt: "Main product image" },
    { src: "/productImages/image.png", alt: "Thumbnail 1" },
    { src: "/productImages/image.png", alt: "Thumbnail 2" },
    // Add more images as needed
  ],
  name: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
  price: 1299.0,
  lastPrice: 1410.87,
  discount: 12,
  rating: 4.8,
  reviews: 125,
  colors: ["gray", "silver"],
  brand: "Apple",
  modelName: "Macbook Pro",
  screenSize: "13.3 inches",
  hardDiskSize: "256 GB",
  cpuModel: "Core i5",
  technicalDetails: {
    display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
    graphics: "Apple 10-core GPU",
    processor: "Apple M2 chip",
    inTheBox: "67W USB-C Power Adapter, USB-C Charge Cable (2 m)",
    height: "0.61 inch (1.56 cm)",
    width: "11.97 inches (30.41 cm)",
  },
};

const similarProducts = [
  {
    id: "1",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "2",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "3",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "4",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "5",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
];

const frequentlyBoughtTogether = [
  {
    id: "1",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "2",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "3",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "4",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
  {
    id: "5",
    name: "MacBook 1",
    imageUrl: "/productImages/image.png",
    price: 45,
    rating: 4.6,
    discount: 25,
  },
];
const page: NextPage<PageProps> = ({ params }) => {
  return (
    <>
      <div>{params.productId}</div>
      <ProductDetails {...productData} />
      <ProductsCarousel title="Similar Products" products={similarProducts} />
      <ProductsCarousel
        title="Frequently Bought Together"
        products={frequentlyBoughtTogether}
      />
    </>
  );
};

export default page;
