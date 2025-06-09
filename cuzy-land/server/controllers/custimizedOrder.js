const customizedOrder = require('../models/Candle')



exports.getCustomizedOrder= async(req, res)=>{

    console.log(req.body)


    try{
    const orders = await customizedOrder.find()

    console.log(orders)
    res.status(200).send(orders)

    }catch(error){
        console.log(error)
        res.status(500).send({
            message: "Fail to fech customizedOrders"
        })
    }

    
    

}


