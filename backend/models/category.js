
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {
            type: String,
            unique: true,
            index: true
        }
    },
    { timestamp: true }
);

const Category = mongoose.model('Category', categorySchema);

//Export Statement
export default Category;

