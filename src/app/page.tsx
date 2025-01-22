import CategoryCards from "@/components/products/categories";
import { FeaturedSection } from "@/components/products/feature";
import FeaturedProdoucts from "@/components/products/featuredProducts";
import HeroSection from "@/components/Hero";
import Products from "@/components/products/productSection";
import Section3 from "@/components/section2";


export default function Home() {
  return (
    <>
    <main>
   <HeroSection/> 
   <FeaturedSection/>
   <FeaturedProdoucts/>
   <CategoryCards/>
   <Section3/>
   <Products/>
   </main>
   </>
  );
}
