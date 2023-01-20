export type Producto = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<string>

}

export type ProductosResponse = {
  products : Array<Producto>;
}
