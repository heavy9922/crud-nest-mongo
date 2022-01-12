import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
@Injectable()
export class ProductService {
  constructor(@InjectModel('product') private pModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.pModel.find();
    return products;
  }

  async getProduct(productId: string): Promise<Product> {
    const product = await this.pModel.findById(productId);
    return product;
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const product = new this.pModel(createProductDTO);
    return await product.save();
  }

  async deleteProduct(productID: string): Promise<Product> {
    const delProduct = await this.pModel.findByIdAndDelete(productID);
    return delProduct;
  }

  async updateProduct(
    productID: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const updateProduct = await this.pModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updateProduct;
  }
}
