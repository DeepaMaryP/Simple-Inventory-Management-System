import { model, Schema } from "mongoose";

const itemSchema = new Schema(
    {
        name: {type:String, required:true,},
        quantity: {type:Number, required: true},
        price: {type: Number, required:true},
    }, {timestamps : true}
)

const Item = model('item',itemSchema)

export default Item;