import OurBrand from "@/components/about/aboutfeature";
import OurPopularProducts from "@/components/about/aboutProduct";
import Section1 from "@/components/about/section1";

export default function section(){
    return(
    <>
      <main>
     <Section1/>
      <OurBrand/>
      <OurPopularProducts/>
      </main>
         </>
    );
}