import mercadopago from "mercadopago";


export const createOrder = async (req, res) => {

    const {id, title, unit_price, currency_id, quantity}= req.body; 


 mercadopago.configure({
    access_token:"TEST-3112718664269867-092818-980e648e65dd7580c35036bd138df0cc-758580456"
 });

 const result = await mercadopago.preferences.create({
    items:[
        {
            id: 12,
            title: title,
            unit_price: unit_price,
            currency_id: currency_id,
            quantity: quantity
        }
    
       
    ]
    /* https://youtube.com/shorts/49mb21k7VBc?si=-t1c05bLtfA6snbt */
/*     back_urls:{

    }, */
/*     payer: {
        name:"fedra",
        surname:"fedra"
      }, */
 })

 console.log(result.body.init_point);

 res.status(201).json({
  link:  result.body.init_point
  })

};


export const recibeWebHook = (req, res)=>{
      
};