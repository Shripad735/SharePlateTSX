const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/Authentication');
const { 
  getDonations, 
  getTotalDonations, 
  deliverdDonationsCount, 
  createDonation, 
  getMyDonations 
} = require('../controllers/Donation');

// Make sure this route is before the /:status route to avoid conflicts
router.get("/my-donations", authMiddleware, getMyDonations);

router.get("/totaldonations", authMiddleware, getTotalDonations);
router.get("/totaldeliveredfood", authMiddleware, deliverdDonationsCount);
router.get("/:status", authMiddleware, getDonations);
router.post("/create", createDonation);

module.exports = router;