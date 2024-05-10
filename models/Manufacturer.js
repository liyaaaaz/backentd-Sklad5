import mongoose from "mongoose";

const ManufacturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

}, {
 timestamps: true,
},
);

export default mongoose.model('Manufacturer', ManufacturerSchema);