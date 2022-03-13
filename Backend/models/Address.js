const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    houseNo: { 
        type: String,
    },
    landMark: { 
        type: String,
    },
    city: { 
        type: String,
    },
    country: { 
        type: String,
    },
    pin: { 
        type: Number,
    },
    receiverName: {
        type: String,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
}
)

module.exports = mongoose.model("Address", addressSchema);