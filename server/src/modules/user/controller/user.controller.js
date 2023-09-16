import { customerModel } from "../../../../db/models/user.model.js"
import { handleAsyncError } from "../../../utils/HandleAsyncError.js"




export const getAllUser = handleAsyncError(async (req, res) => {


    const users = await customerModel.find()
    res.json(users)
})


export const addUser = handleAsyncError(async (req, res) => {


    const user = await customerModel.insertMany(req.body)
    res.json({ user })
})



export const transfer = handleAsyncError(async (req, res) => {
    const { id, balance } = req.body

    const updatedBalance = await customerModel.findByIdAndUpdate(id, {
        $inc: {
            balance
        }
    }, { new: true })
    res.json({ updatedBalance })
})