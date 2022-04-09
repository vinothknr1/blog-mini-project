
import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        slug: {
            type: String,
            unique: true,
            index: true
        }
    },
    { timestamps: true }
);


const Tag = mongoose.model('Tag', tagSchema);

//Export Statement
export default Tag;

