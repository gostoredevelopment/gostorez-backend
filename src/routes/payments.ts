import express from 'express';

const router = express.Router();

// Paystack webhook handler
router.post('/webhooks/paystack', express.json({ type: 'application/json' }), (req, res) => {
  console.log('💰 Paystack Webhook Received:', JSON.stringify(req.body, null, 2));
  
  // Immediate response to prevent timeout
  res.sendStatus(200);
});

// Flutterwave webhook handler  
router.post('/webhooks/flutterwave', express.json({ type: 'application/json' }), (req, res) => {
  console.log('💰 Flutterwave Webhook Received:', JSON.stringify(req.body, null, 2));
  
  // Immediate response to prevent timeout
  res.sendStatus(200);
});

export default router;