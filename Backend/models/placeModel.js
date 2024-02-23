import mongoose from "mongoose";

const place = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        sub:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true,
        },
        tag:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Place = mongoose.model('place', placeSchema);