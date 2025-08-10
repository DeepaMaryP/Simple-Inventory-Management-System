const validateItem = async (req, res, next) => {
    const { name, quantity, price } = req.body
    if (!name) {
        res.status(400).json({ success: false, message: "Please enter name" })
    }
     if (!quantity) {
        res.status(400).json({ success: false, message: "Please enter quantity" })
    }
     if (!price) {
        res.status(400).json({ success: false, message: "Please enter price" })
    }   

    next()
}


export default validateItem