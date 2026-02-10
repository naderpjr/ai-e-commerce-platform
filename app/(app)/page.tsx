import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories";


export default async function Home() {

  // Fetch categories for filter sidebar
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });

  console.log(categories);

  return (
    <div className="">
      <h1>Hello World</h1>
    </div>
  );
}
