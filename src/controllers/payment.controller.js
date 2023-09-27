import mercadopago from "mercadopago";


export const createOrder = async (req, res) => {

/*     const {monto}= req.body; */

console.log(req.body);

 mercadopago.configure({
    access_token:"TEST-7858246883423376-071016-92321f0e04f01225bb2cb36438f6a2f9-758580456"
 });

 const result = await mercadopago.preferences.create({
    items:[
        {
            id:1212,
            title:"Aportes",
            unit_price:  1 ,
            currency_id:"ARS",
            quantity:1,
        
        }
    ], /* https://youtube.com/shorts/49mb21k7VBc?si=-t1c05bLtfA6snbt */
/*     back_urls:{

    }, */
    payer: {
        name:"fedra",
        surname:"fedra"
      },
 })

 console.log(result.body.init_point);
 

 res.send(result.body.init_point);

};


export const recibeWebHook = (req, res)=>{
      
};