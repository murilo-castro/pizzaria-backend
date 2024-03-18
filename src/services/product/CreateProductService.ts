interface ProductRequest {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    description,
    price,
    banner,
    category_id,
  }: ProductRequest) {
    return { ok: true };
  }
}

export { CreateProductService };