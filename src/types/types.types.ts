export type DetailCard = {
  available: boolean
  id: number
  name: string
  labels: {
    discount: string
    new: string
  }
  preview_picture: string
  price: number
  price_discount: number
  quantity: number
  reviews: number
}

export interface DetailsProduct {
  available: boolean
  id: number
  labels: {
    discount: string
    new: string
  }
  name: string
  preview_picture: string
  price: number
  price_discount: number
  quantity: number
  reviews: number
  characteristics: [
    {
      label: string,
      name: string,
      value: string
    }
  ]
}