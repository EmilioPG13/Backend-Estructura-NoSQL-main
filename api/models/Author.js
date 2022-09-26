import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    birthdate: Date,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }]
})

export default mongoose.model('Author', authorSchema)