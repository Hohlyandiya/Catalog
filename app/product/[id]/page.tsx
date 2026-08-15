"use client"
import { Badge, Button, Header } from "@/src/components/ui"
import { useGetProduct, useGetProducts } from "@/src/hooks"
import { DetailsProduct } from "@/src/types/types.types"
import Image from "next/image"
import { usePathname } from "next/navigation"

const PRODUCTSTATIC: DetailsProduct[] = [
{
    "available": true,
    "id": 608204,
    "labels": {
      "discount": "Есть скидка",
      "new": "Новинки"
    },
    "name": "Карабин охотничий Adler AD-500, калибр 308Win., L=510",
    "preview_picture": "https://ohotaktiv.ru/upload/resize_cache/iblock/e13/200_200_1/e02rm12cwkqqeubx6bu9becysk0kewwd.webp",
    "price": 120990,
    "price_discount": 119990,
    "quantity": 39,
    "reviews": 0,
    "characteristics": [
        ,
        {
            "label": "Длина ствола",
            "name": "barrel_length",
            "value": "510 мм"
        },
        {
            "label": "Вес",
            "name": "weight",
            "value": "3.5 кг"
        },
        {
            "label": "Ёмкость магазина",
            "name": "magazine_capacity",
            "value": "5 патронов"
        }
    ]
}]

const Product = () => {
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
              <Badge hidden={product.labels?.new ? false : true}>{product.labels.new}</Badge>
              <Badge hidden={product.labels?.discount ? false : true} >{product.labels.discount}</Badge>
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