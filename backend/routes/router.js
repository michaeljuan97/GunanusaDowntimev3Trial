// import express
import express from "express";
// import function from controller
import { showDowntime, updateDowntime, showDowntimebyId, showDowntimeChopp, showDowntimeAlmond, showDowntimePasta, showDowntimeRMP } from "../controller/downtime.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/downtimes', showDowntime);

// Get downtime line chopp
router.get('/downtimes/chopp', showDowntimeChopp);

// Get downtime line pasta
router.get('/downtimes/pasta', showDowntimePasta);

// Get downtime line almond
router.get('/downtimes/almond', showDowntimeAlmond);

// Get downtime line RMP
router.get('/downtimes/rmp', showDowntimeRMP);
// Get Single downtime
router.get('/downtimes/:id', showDowntimebyId);
 
// Create New Product
// router.post('/products', createProduct);
 
// Update Product
router.put('/downtimes/:id', updateDowntime);
 
// Delete Product
// router.delete('/products/:id', deleteProduct);
 
// export default router
export default router;