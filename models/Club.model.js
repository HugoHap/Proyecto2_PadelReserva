const { Schema, model } = require("mongoose");

const clubSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            street: {
                type: String
            },
            city: {
                type: String
            },
            zip: {
                type: Number
            },
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        image: {
            type: String
        }
    },

    {
        timestamps: true,
    }
);

const Club = model("Club", clubSchema);

module.exports = Club;
