import { getAllCategory } from "../api/data";
import Category from "./Category";

const MainContent = async () => {
  //const [category, setCategory] = useState<any[]>();

  const getAllCat = await getAllCategory();
  //setCategory(getAllCat);

  return (
    <div className="mainContent">
      <Category categoryData={getAllCat} />

      {/* <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        />
        <CategoryBox
          title="Category 1"
          description="This is a description for Category 1."
          imageUrl="/category-1.jpg"
        /> */}
    </div>
  );
};

export default MainContent;
