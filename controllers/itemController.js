import { createItemService, getAllItemService } from "../services/itemService.js"

export const createItem = async (req, res) => {
    const response = await createItemService(req.body)
    if (response.success) {
        return res.status(201).json({ success: true, message: "Item created succesfully" })
    } else {
        return new Error('Failed to create new item')
    }
}

export const getItems = async (req, res) => {
    const response = await getAllItemService();      
    if (response.success) {
        res.status(200).send(response)
    }else{
         return new Error('Failed to get items')
    }

}