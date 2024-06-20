const express = require('express');
const Medicine = require('../model/medicine')
const router = express.Router();
const medicineController = require('../controller/medicineController')


// Get all medicines from the database
router.get("/", medicineController.getAllMedicineItems);

// post a medicine 
router.post('/', medicineController.postNewMedicine);

// delete a medicine
router.delete('/:id', medicineController.deleteMedicineItem);

//  get single medicine
router.get("/:id", medicineController.singleMedicine);

// update single medicine
router.patch("/:id", medicineController.updateMedicine);

// router.get('/braintree/token', medicineController.braintreeTokenController);
// router.post('/braintree/payment', medicineController.brainTreePaymentController);

module.exports = router;

// router.get('/:id', medicineController.getMedicineById);

// router.post('/', medicineController.uploadMedicine);

// Insert a medicine to the db: POST method
// router.post("/upload-medicine", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await Medicine.create(data);
//     res.send(result);
//   } catch (error) {
//     console.error('Error inserting medicine:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// Update medicine: PATCH or UPDATE method
// router.patch("/medicine/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updateMedicineData = req.body;
//     const result = await Medicine.findByIdAndUpdate(id, updateMedicineData, { new: true });
//     res.send(result);
//   } catch (error) {
//     console.error('Error updating medicine:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// Delete medicine
// router.delete("/medicine/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await Medicine.findByIdAndDelete(id);
//     res.send(result);
//   } catch (error) {
//     console.error('Error deleting medicine:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// Find by category
// router.get("/all-medicines", async (req, res) => {
//   try {
//     const query = req.query.category ? { category: req.query.category } : {};
//     const result = await Medicine.find(query).exec();
//     res.send(result);
//   } catch (error) {
//     console.error('Error fetching medicines:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// router.get("/medicine/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await Medicine.findById(id).exec();
//     res.send(result);
//   } catch (error) {
//     console.error('Error fetching medicine by ID:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });