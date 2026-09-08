const laptops = require("../models/laptopmodel")

//add laptops
exports.addlaptopcontroller = async (req, res) => {
    try {
        console.log("inside laptop controller")

        const {
            name,
            brand,
            price
        } = req.body

        const picture = req.file.filename

        console.log("picture", picture)

        const existinglap = await laptops.findOne({ name })

        if (existinglap) {
            res.status(400).json(
                "Lap already exists"
            )
        }
        else {

            const newlap = await laptops.create({
                name, brand, price, picture
            })
            res.status(200).json(
                newlap
            )

        }

    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Server Error",
            error
        })

    }




}

//get laptops

exports.getlaptopcontroller = async (req, res) => {
    try {
        console.log("inside laptop controller")

        const laptoplist = await laptops.find()

        res.status(200).json(
            laptoplist
        )

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error
        })

    }
}

//get single data

exports.getsingledatacontroller = async (req, res) => {
    try {
        console.log("inside laptop controller")

        const { id } = req.params

        const singledata = await laptops.findById({ _id: id })



        res.status(200).json(
            singledata
        )

    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error
        })

    }
}

//getsingledata and update

exports.getsingledataandupdatecontroller = async (req, res) => {
    try {
        console.log("getsingledataandupdatecontroller")

        const { id } = req.params
        const {
            name,
            brand,
            price
        } = req.body

        const updateddata = {
            name,
            brand,
            price
        }
        if (req.file) {
            updateddata.picture = `${req.file.filename}`
        }

        const newdata = await laptops.findByIdAndUpdate(
            { _id: id },
            updateddata,
            { new: true });


        res.status(200).json(
            newdata
        )



    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error
        })

    }
}

//delete data

exports.deletelaptopdatacontroller = async (req, res) => {
    try {
        console.log("deletelaptopdatacontroller")

        const { id } = req.params



        const newdata = await laptops.findByIdAndDelete(
            { _id: id }
        )

        res.status(200).json(
            newdata
        )



    } catch (error) {

        res.status(500).json({
            message: "Server Error",
            error
        })

    }
}

