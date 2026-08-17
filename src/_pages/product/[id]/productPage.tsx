"use client"
import { BadgeProduct, Button, Header } from "@/src/widgets/ui"
import { useGetProduct,  } from "@/src/hooks"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Product = () => {
  const pathName = usePathname().split("/")
  const idProduct = +pathName[pathName.length - 1]
  const product = useGetProduct(idProduct)
  const characteristics = product.characteristics.map(characteristic => {
    return (
      <span key={product.id} className="text-xl">{characteristic.label}: {characteristic.value}</span> 
    )
  })
  return (
    <>
      <Header/>
      <div className="bg-gray-100 h-full">
        <div className="mx-auto w-200 p-5 bg-white">
          <div className="flex justify-between items-center gap-10 border-b">
            <div>
            <Image width={300} height={300} src={product.preview_picture} alt="Image product"/>
          </div>
          <div className="flex flex-col justify-between items-start gap-3">
            <div className="flex gap-5">
              <BadgeProduct hidden={product.labels?.new ? false : true}>{product.labels.new}</BadgeProduct>
              <BadgeProduct hidden={product.labels?.discount ? false : true} >{product.labels.discount}</BadgeProduct>
            </div>
            <span className="text-2xl font-bold">{product.name}</span>
            <div className="flex gap-2">
              {product.price_discount 
              ? 
                <>
                  <span className="text-gray-500 line-through text-xl">{product.price} ₽</span>
                  <span className="text-xl">{" "}{product.price_discount} ₽</span> 
                </>
              : 
                <span className="text-xl">{product.price} ₽</span>
              }
            </div>
            <span className="text-xl">{product.quantity}шт. осталось</span>
            <span className="text-xl">{product.reviews} отзывов</span>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <span className="text-2xl font-bold">Характеристики:</span>
          <div className="flex flex-col gap-2 mt-3">
            {characteristics}
          </div>
        </div>
        <Button>В корзину</Button>
      </div>
      </div>
      
    </>
  )
}

export default Product