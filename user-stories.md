# User Stories — MVP Features

## Vendor Profile Creation
**Story:** As a Vendor, I want to create a profile with images and description so that buyers can view my shop.  
**Acceptance Criteria**
- Vendor can POST `/vendors` and get 201 + vendor_id.  
- GET `/vendors/{id}` returns profile data.

## Product Listing
**Story:** As a Vendor, I want to add a product (title, price, image) so that buyers can purchase it.  
**Acceptance Criteria**
- POST `/products` → 201 + product_id.  
- GET `/products/{id}` → returns title, price, images.

## Ordering / Checkout
**Story:** As a Buyer, I want to checkout my cart so that I can place an order.  
**Acceptance Criteria**
- POST `/orders` → 201 pending_payment.  
- Webhook payment → order status updates to "paid".

## Payments Webhook
**Story:** As the system, I want to verify payment webhooks so that only valid transactions are marked paid.  
**Acceptance Criteria**
- Signature verified → update order.  
- Invalid signature → 400 no change.

## Authentication
**Story:** As a User, I want to sign up/login with email so that I can access my account.  
**Acceptance Criteria**
- POST `/auth/signup` → 201 + JWT.  
- POST `/auth/login` → 200 + JWT or 401 invalid.

## Chat
**Story:** As a Buyer, I want to chat with vendors so we can discuss orders.  
**Acceptance Criteria**
- POST `/messages` → 201 + message_id.  
- GET `/messages?conversation_id` → returns ordered messages.

## Vendor Dashboard
**Story:** As a Vendor, I want a dashboard listing my products and orders.  
**Acceptance Criteria**
- GET `/vendor/{id}/products` returns list.  
- GET `/vendor/{id}/orders` returns orders with status.
