import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div>
      <Banner
        setClass="parallax"
        imageUrl="/category.jpg"
        bannerTitle="Category/type"
      />
      <MainContent />
    </div>
  );
}
