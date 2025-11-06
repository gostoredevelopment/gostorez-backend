# Security & Compliance Checklist

## Secrets Management
- Store all keys in environment variables (Render/Vercel dashboard).
- Never commit `.env` files.

## Database Security
- Use Supabase RLS: only owners can update their records.

## Webhooks
- Verify Paystack/Flutterwave signatures before processing.

## Backups
- Enable Supabase automatic backups (daily).  
- Weekly export to `gostore-db-migrations` repo.

## Compliance
- No card details stored locally.  
- Encrypt sensitive user data if needed.
