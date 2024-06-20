const Medicine = require("../model/medicine");


const getAllMedicineItems = async(req, res) => {
    try {
        const medicine = await Medicine.find({}).sort({createdAt: -1});
        console.log(medicine);
        res.status(200).json(medicine)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// post a new medicine
const postNewMedicine = async(req,res) => {
  const newMedicine = req.body;
  try {
    const result = await Medicine.create(newMedicine);
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
// delete a medicine
const deleteMedicineItem = async(req,res) => {
  const medicineId = req.params.id;
  try {
    const deleteItem = await Medicine.findByIdAndDelete(medicineId);
    if(!deleteItem) {
    return res.status(200).json({message: "Medicine not found!"});
    
    }
    res.status(200).json({message: "Medicine Item Deleted Successfully!"});
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
// get single medicine 
const singleMedicine = async (req, res) => {
  const medicineID = req.params.id;
  try {
    const medicine = await Medicine.findById(medicineID);
    res.status(200).json(medicine)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// update signle medicine
const updateMedicine = async (req, res) => {
  const medicineId = req.params.id;
  const {medicineName, imageUrl, category, medicineDescription, medicinePricePKR, DrugForm, ManufacturedBy, PackSize } = req.body;
  try {
    const updateMEdicine = await Medicine.findByIdAndUpdate(medicineId , 
      {medicineName, imageUrl, category, medicineDescription, medicinePricePKR, DrugForm, ManufacturedBy, PackSize },
      {new: true, runValidators: true}
      );
    if(!updateMEdicine) {
      return res.status(200).json({message: "Medicine not found!"});
    }
    res.status(200).json(updateMEdicine);

    
  } catch (error) {
    res.status(500).json({ message: error.message })       
  }
}
// async function getMedicineById(req, res) {
//     try {
//       const id = req.params.id;
//       const result = await Medicine.findById(id).exec();
//       res.send(result);
//     } catch (error) {
//       console.error('Error fetching medicine by ID:', error);
//       res.status(500).send({ error: 'Internal Server Error' });
//     }
//   }

// PAYMENT GATEWAY API 
// const braintreeTokenController = async (req, res) => {
//   try {
//     gateway.clientToken.generate({}, function (err, response) {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(response);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const brainTreePaymentController = async (req, res) => {
//   try {
//     const { nonce, cart } = req.body;
//     let total = 0;
//     cart.map((i) => {
//       total += i.price;
//     });
//     let newTransaction = gateway.transaction.sale(
//       {
//         amount: total,
//         paymentMethodNonce: nonce,
//         options: {
//           submitForSettlement: true,
//         },
//       },
//       function (error, result) {
//         if (result) {
//           const order = new orderModel({
//             products: cart,
//             payment: result,
//             buyer: req.user._id,
//           }).save();
//           res.json({ ok: true });
//         } else {
//           res.status(500).send(error);
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };


module.exports = {
    getAllMedicineItems,
    postNewMedicine,
    deleteMedicineItem,
    singleMedicine,
    updateMedicine
}