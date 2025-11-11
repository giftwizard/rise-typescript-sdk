# Rise TypeScript SDK

[![npm version](https://badge.fury.io/js/@rise/rise-typescript-sdk.svg)](https://www.npmjs.com/package/@rise/rise-typescript-sdk)

The Rise TypeScript SDK provides convenient access to the Rise Platform API from TypeScript and JavaScript applications.

## Installation

```bash
npm install @rise/rise-typescript-sdk
```

## Reference

A full API reference for this library is available [here](./reference.md).

## Usage

The SDK supports two authentication methods: API Key and OAuth.

To use this SDK, you need either:
- An API Key from your Rise account, or
- An application configured to generate OAuth tokens (valid for 4 hours)

For more information on OAuth authentication and app installation flow, see the [Rise Platform Documentation](https://platform.rise.ai/docs#tag/Integrate-your-application-with-Rise/App-Installation-Flow/Step-2-or-Handle-installation-authentication-in-your-app).

### API Key Authentication

```typescript
import { RiseSDKClient } from '@rise/rise-typescript-sdk';

const sdk = RiseSDKClient.withApiKey({
  token: 'IST.xxx.yyy.zzz',
  accountId: 'your-account-id'
});

// Use the SDK
const giftCard = await sdk.giftCards.getGiftCard({ giftCardId: 'card-123' });
console.log(giftCard.data);
```

### OAuth Authentication

OAuth tokens are valid for 4 hours.

```typescript
import { RiseSDKClient } from '@rise/rise-typescript-sdk';

const sdk = await RiseSDKClient.withOAuth({
  clientId: 'your-app-id',
  clientSecret: 'your-app-secret',
  instanceId: 'merchant-instance-id'
});

// Use the SDK
const wallets = await sdk.wallets.queryWallets({
  query: {
    filter: '{"email": "customer@example.com"}'
  }
});
console.log(wallets.data);
```

## API Overview

The SDK provides access to the following APIs:

### Gift Cards

Manage gift cards, including creating, updating, and querying gift cards.

```typescript
// Create a gift card
const newCard = await sdk.giftCards.createGiftCard({
  giftCard: {
    initialValue: 10000, // $100.00 in cents
    currency: 'USD'
  }
});

// Get a gift card
const card = await sdk.giftCards.getGiftCard({ giftCardId: 'card-123' });

// Query gift cards
const cards = await sdk.giftCards.queryGiftCards({
  query: {
    filter: '{"status": "active"}'
  }
});
```

### Wallets

Manage customer wallets and their associated gift cards.

```typescript
// Create or get a wallet
const wallet = await sdk.wallets.getOrCreateWallet({
  customerReference: {
    email: 'customer@example.com'
  }
});

// Query wallets
const wallets = await sdk.wallets.queryWallets({
  query: {
    filter: '{"balance": {"$gt": 0}}'
  }
});
```

### Wallet Actions

Manage wallet actions such as issuing store credit, rewards, and refunds.

```typescript
// Create a wallet action
const action = await sdk.walletActions.createWalletAction({
  walletAction: {
    walletId: 'wallet-123',
    type: 'STORE_CREDIT',
    amount: 5000, // $50.00 in cents
    reason: 'Customer appreciation'
  }
});

// Query wallet actions
const actions = await sdk.walletActions.queryWalletActions({
  query: {
    filter: '{"walletId": "wallet-123"}'
  }
});
```

### Recipients

Manage gift card recipients.

```typescript
// Create a recipient
const recipient = await sdk.recipients.createRecipient({
  recipient: {
    email: 'recipient@example.com',
    name: 'John Doe'
  }
});

// Query recipients
const recipients = await sdk.recipients.queryRecipients({
  query: {
    filter: '{"email": "recipient@example.com"}'
  }
});
```

### Transactions

Query transaction history.

```typescript
// Query transactions
const transactions = await sdk.transactions.queryTransactions({
  query: {
    filter: '{"giftCardId": "card-123"}'
  }
});
```
