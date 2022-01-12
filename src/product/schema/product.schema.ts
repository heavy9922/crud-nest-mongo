import { Schema } from 'mongoose'

export const productSchema = new Schema({
    name:{type:String,required:true},
    description:String,
    imageURL: String,
    price: Number,
    CreatedAT: {
        type: Date,
        default: Date.now,
    }
});