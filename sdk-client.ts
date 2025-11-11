import { Configuration } from './configuration';
import { 
    GiftCardApi,
    GiftCardOrderApi,
    OAuthApi,
    RecipientApi,
    TransactionApi,
    WalletApi,
    WalletActionApi,
    WorkflowsApi
} from './api';

/**
 * Configuration options for API Key authentication
 */
export interface ApiKeyAuthOptions {
    /**
     * Authentication token (API Key)
     * Example: 'IST.xxx.yyy.zzz'
     */
    token: string;
    
    /**
     * Rise account ID (UUID format)
     * Example: '2dbe5b80-1ee9-485f-a8af-c49e40d65b8b'
     */
    accountId: string;
    
    /**
     * Base URL for the Rise API
     * @default 'https://platform.rise.ai'
     */
    basePath?: string;
}

/**
 * Configuration options for OAuth authentication
 */
export interface OAuthAuthOptions {
    /**
     * OAuth client ID (App ID)
     */
    clientId: string;
    
    /**
     * OAuth client secret (App Secret Key)
     */
    clientSecret: string;
    
    /**
     * OAuth instance ID (App Instance ID)
     * Identifies the specific Rise merchant account
     */
    instanceId: string;
    
    /**
     * Base URL for the Rise API
     * @default 'https://platform.rise.ai'
     */
    basePath?: string;
}

/**
 * Rise SDK Client - Simple unified interface for all Rise APIs
 * 
 * @example API Key Authentication
 * ```typescript
 * const riseSDK = RiseSDKClient.withApiKey({
 *   token: 'IST.xxx.yyy.zzz',
 *   accountId: '2dbe5b80-1ee9-485f-a8af-c49e40d65b8b'
 * });
 * 
 * const giftCard = await riseSDK.giftCards.getGiftCard('card-id');
 * ```
 * 
 * @example OAuth Authentication
 * ```typescript
 * const riseSDK = await RiseSDKClient.withOAuth({
 *   clientId: 'your-app-id',
 *   clientSecret: 'your-app-secret',
 *   instanceId: 'merchant-instance-id'
 * });
 * 
 * const wallets = await riseSDK.wallets.queryWallets({...});
 * ```
 */
export class RiseSDKClient {
    private configuration: Configuration;
    
    /**
     * Gift Card API - Manage gift cards
     */
    public readonly giftCards: GiftCardApi;
    
    /**
     * Gift Card Order API - Manage gift card orders
     */
    public readonly giftCardOrders: GiftCardOrderApi;
    
    /**
     * OAuth API - Handle OAuth operations
     */
    public readonly oauth: OAuthApi;
    
    /**
     * Recipient API - Manage recipients
     */
    public readonly recipients: RecipientApi;
    
    /**
     * Transaction API - Manage transactions
     */
    public readonly transactions: TransactionApi;
    
    /**
     * Wallet API - Manage wallets
     */
    public readonly wallets: WalletApi;
    
    /**
     * Wallet Action API - Manage wallet actions
     */
    public readonly walletActions: WalletActionApi;
    
    /**
     * Workflows API - Manage workflows
     */
    public readonly workflows: WorkflowsApi;

    /**
     * Private constructor - use static factory methods instead
     */
    private constructor(headers: Record<string, string>, basePath: string) {
        this.configuration = new Configuration({
            basePath,
            baseOptions: {
                headers
            }
        });

        // Initialize all API clients
        this.giftCards = new GiftCardApi(this.configuration);
        this.giftCardOrders = new GiftCardOrderApi(this.configuration);
        this.oauth = new OAuthApi(this.configuration);
        this.recipients = new RecipientApi(this.configuration);
        this.transactions = new TransactionApi(this.configuration);
        this.wallets = new WalletApi(this.configuration);
        this.walletActions = new WalletActionApi(this.configuration);
        this.workflows = new WorkflowsApi(this.configuration);
    }

    /**
     * Create Rise SDK client with API Key authentication
     * 
     * @param options - API Key authentication options
     * @returns Configured Rise SDK client instance
     * 
     * @example
     * ```typescript
     * const sdk = RiseSDKClient.withApiKey({
     *   token: 'IST.xxx.yyy.zzz',
     *   accountId: '2dbe5b80-1ee9-485f-a8af-c49e40d65b8b'
     * });
     * ```
     */
    static withApiKey(options: ApiKeyAuthOptions): RiseSDKClient {
        const headers: Record<string, string> = {
            authorization: `Bearer ${options.token}`,
            'rise-account-id': options.accountId
        };
        
        return new RiseSDKClient(
            headers,
            options.basePath || 'https://platform.rise.ai'
        );
    }

    /**
     * Create Rise SDK client with OAuth authentication
     * 
     * This method automatically fetches an OAuth access token using the provided credentials.
     * The token is valid for 4 hours.
     * 
     * @param options - OAuth authentication options
     * @returns Promise that resolves to a configured Rise SDK client instance
     * 
     * @example
     * ```typescript
     * const sdk = await RiseSDKClient.withOAuth({
     *   clientId: 'your-app-id',
     *   clientSecret: 'your-app-secret',
     *   instanceId: 'merchant-instance-id'
     * });
     * ```
     */
    static async withOAuth(options: OAuthAuthOptions): Promise<RiseSDKClient> {
        const basePath = options.basePath || 'https://platform.rise.ai';
        
        // Create a temporary configuration for OAuth token request
        const tempConfig = new Configuration({ basePath });
        const oauthApi = new OAuthApi(tempConfig);
        
        // Fetch OAuth token
        const tokenResponse = await oauthApi.someOperation({
            grant_type: 'client_credentials',
            client_id: options.clientId,
            client_secret: options.clientSecret,
            instance_id: options.instanceId
        });
        
        // Create SDK with OAuth token (no Bearer prefix, no accountId header)
        const headers: Record<string, string> = {
            authorization: tokenResponse.data.access_token!
        };
        
        return new RiseSDKClient(headers, basePath);
    }
}
