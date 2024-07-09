import { ProductCard } from "./components/ProductCard";

const productSample = {
  id: "",
  name: "MacBook 1",
  imageUrl: "/productImages/image.png",
  price: 45,
  rating: 4.6,
  discount: 25,
};

const page = () => {
  return (
    <>
      <div>General Products Page</div>
      <ProductCard {...productSample} />
    </>
  );
};

export default page;
