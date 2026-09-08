const express = require("express")
const { addlaptopcontroller, getlaptopcontroller, getsingledatacontroller, getsingledataandupdatecontroller, deletelaptopdatacontroller } = require("./controller/laptopController")
const multerMiddleware = require("./middleware/multermiddleware")

const router = new express.Router()

// add laptop
router.post("/add/laptops",multerMiddleware.single("picture"), addlaptopcontroller)


// get laptops
router.get("/get/laptops", getlaptopcontroller)

//getsingledata

router.get("/singlelaptopdata/:id", getsingledatacontroller)

router.put("/update/:id",multerMiddleware.single("picture"), getsingledataandupdatecontroller)

router.delete("/delete/:id", deletelaptopdatacontroller)

module.exports = router