import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SportTradeApi implements ICredentialType {
	name = 'sportTradeApi';
	displayName = 'SportTrade API';
	documentationUrl = 'sportTrade';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
