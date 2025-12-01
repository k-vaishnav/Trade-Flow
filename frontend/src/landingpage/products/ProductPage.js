import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import products from "../../data/products";

const ProductPage = () => {
  return (
    <>
      <Hero />
      {products.map((item, index) => {
        const isEven = index % 2 === 0;
        return isEven ? (
          <LeftSection
            imageURL={item.imageURL}
            productName={item.productName}
            productDesc={item.productDesc}
            tryDemo={item.tryDemo}
            learnMore={item.learnMore}
            googlePlay={item.googlePlay}
            appStore={item.appStore}
          />
        ) : (
          <RightSection
            imageURL={item.imageURL}
            productName={item.productName}
            productDesc={item.productDesc}
            learnMore={item.learnMore}
          />
        );
      })}
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
};
export default ProductPage;
