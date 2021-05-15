import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    img: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    animal: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    contactOwner: {
        type: String,
        required: true,
    },
});

const Pets = mongoose.model("pets", petsSchema);

export default Pets;
