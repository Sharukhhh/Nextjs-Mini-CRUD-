import mongoose from 'mongoose'


const itemSchema = mongoose.Schema( {

    title : {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    },

} , {timestamps : true});


const ItemModel = mongoose.models.items || mongoose.model('items', itemSchema);

export default ItemModel;