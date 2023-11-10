import { CategoryTitle } from "@/src/components/category-title";
import prisma from "@/utils/prisma";

export const metadata = {
  title: 'Product Test'
}
export default async function Products({ params }) {
  const { id } = params

  const products = await prisma.product.findMany({
    where: { category_id: Number(id) }
  })


  return (
    <div>My Product: {id}

    <CategoryTitle>
      {products?.length > 0 
        ? products?.map(product => (
          <h3 key={product.id}>{product.name}</h3>
      ))
        : <div>There is no product on this category</div>
      }
    </CategoryTitle>

  
    </div>
  )
}