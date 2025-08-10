import Item from "../model/item.js"

export const createItemService = async (data) => {
    try {
        let newItem = new Item(data);
        newItem = await newItem.save();
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const getAllItemService = async () => {
    try {
        const allUsers = await Item.find();
        return { success: true, allUsers };

    } catch (error) {
        return { success: false }
    }
}