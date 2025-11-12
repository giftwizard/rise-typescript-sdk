# Rise TypeScript SDK

[![npm version](https://badge.fury.io/js/@rise/rise-typescript-sdk.svg)](https://www.npmjs.com/package/@rise/rise-typescript-sdk)

The Rise TypeScript SDK provides convenient access to the Rise Platform API from TypeScript and JavaScript applications.

## Installation

```bash
npm install @rise/rise-sdk
```

## Prerequisites


Before using the Rise TypeScript SDK, ensure you have the following:

#### Choosing an Authentication Method

- Use API keys for server-side applications and scripts that require direct access to your Rise account.
- Use OAuth for applications that need to integrate with multiple merchant accounts or require delegated access.

### Runtime Requirements

- **Node.js 16 or higher** - The SDK requires Node.js version 16.0.0 or later.

### Authentication


The SDK supports two authentication methods:

#### API Key Authentication
- **API Key** - A valid API key from your Rise account
- **Account ID** - Your Rise account identifier

#### OAuth Authentication
- **Client ID** - Your application's client ID (also known as App ID)
- **Client Secret** - Your application's client secret
- **Instance ID** - The merchant's instance ID (obtained during app installation)
- OAuth tokens are valid for 4 hours and automatically refresh
- Requires completing the [app installation flow](https://platform.rise.ai/docs#tag/Integrate-your-application-with-Rise/App-Installation-Flow/Step-2-or-Handle-installation-authentication-in-your-app)

For more information on OAuth authentication and the app installation flow, see the [Rise Platform Documentation](https://platform.rise.ai/docs#tag/Integrate-your-application-with-Rise/App-Installation-Flow/Step-2-or-Handle-installation-authentication-in-your-app).

## Reference

A full API reference for this library is available [here](./reference.md).

## Usage

### API Key Authentication

```typescript
import { RiseSDKClient } from '@rise/rise-sdk';

const sdk = RiseSDKClient.withApiKey({
  token: 'IST.xxx.yyy.zzz',
  accountId: 'your-account-id'
});
```

### OAuth Authentication

OAuth tokens are valid for 4 hours.

```typescript
import { RiseSDKClient } from '@rise/rise-sdk';

const sdk = await RiseSDKClient.withOAuth({
  clientId: 'your-app-id',
  clientSecret: 'your-app-secret',
  instanceId: 'instance-id'
});
```

## API Overview

The SDK provides access to the following APIs:


### Gift Cards

Manage gift cards, including creating, retrieving, and querying gift cards.

```typescript
const newCard = await sdk.giftCards.createGiftCard({
  giftCard: {
    initialValue: '100',
    sourceInfo: {
        type: 'MANUAL',
        manualOptions: {
            note: 'new gift card'
        }
    }
  }
});

const newGeneratedGiftcardID = newCard.data.giftCard?.id;

const newGeneratedGiftcard = await sdk.giftCards.getGiftCard(newGeneratedGiftcardID);

const cards = await sdk.giftCards.queryGiftCards({
  query: {
    cursorPaging: {
        limit: 10
    }
  }
});
```

### Wallets

Manage customer wallets and their associated gift cards.

```typescript
const wallet = await sdk.wallets.getOrCreateWallet({
  customerReference: {
    email: 'customer@example.com',
    sourceChannelId: 'channel-id',
    sourceTenantId: 'tenant-id',
    sourceCustomerId: 'customer-id'
  }
});

const wallets = await sdk.wallets.queryWallets({
    query: {
      paging: {
        limit: 10
      }
    }
});
```

### Wallet Actions

Manage wallet actions such as issuing store credit, rewards, and refunds.

```typescript
const action = await sdk.walletActions.createWalletAction({
  walletAction: {
    walletId: 'wallet-id',
    amount: '5000',
    type: 'REWARD',
    storeCreditContext: {
        sourceChannelId: 'channel-id',
        sourceTenantId: 'tenant-id'
    }
  }
});

const actions = await sdk.walletActions.queryWalletActions({
  query: {
    paging: {
      limit: 10
    }
  }
});
```

### Recipients

Manage gift card recipients.

```typescript
const recipient = await sdk.recipients.createRecipient({
  recipient: {
    email: 'recipient@example.com',
    name: 'John Doe',
    giftCardId: 'giftcard-id'
  }
});

const recipients = await sdk.recipients.queryRecipients({
  query: {
    cursorPaging: {
        limit: 5
    }
  }
});
```

### Transactions

Query transaction history.

```typescript
const transactions = await sdk.transactions.queryTransactions({
    query: {
        cursorPaging: {
            limit: 5
        }
    }
});
```