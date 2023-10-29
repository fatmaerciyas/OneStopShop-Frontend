export interface Product {
  productId?: number;
  name: string;
  description?: string;
  image?: string;
  stock: number;
  price: number;
  created_at: string;
  modified_at: string;
  productCarts?: any;
  productCategories?: any;
  comments?: any;
}
