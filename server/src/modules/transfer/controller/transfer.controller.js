import { transferModel } from "../../../../db/models/transfer.model.js";
import { customerModel } from "../../../../db/models/user.model.js";
import { handleAsyncError } from "../../../utils/HandleAsyncError.js";




export const getAllTransfers = handleAsyncError(async (req, res) => {


    const transfers = await transferModel.find()
        .populate("sender", 'name')
        .populate("receiver", "name")
    res.json(transfers)
})
export const addTransfer = handleAsyncError(async (req, res) => {

    const transfer = await transferModel.insertMany(req.body)
    res.json(transfer)
})