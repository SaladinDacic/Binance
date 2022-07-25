import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BinanceApi implements ICredentialType {
	name = 'binanceApi';
	displayName = 'Binance API';
	documentationUrl = 'binance';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			required : true,
			default: '',
		},
		{
			displayName: 'API Secret',
			name: 'apiSecret',
			type: 'string',
			required: true,
			default: '',
		},
	];
}
