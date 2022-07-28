import {
	OptionsWithUri,
} from 'request';

import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IDataObject,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

export async function binanceApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: string, endpoint: string, body: object = {}, qs: object = {}, uri?: string): Promise<any> { // tslint:disable-line:no-any

	//Get credentials the user provided for this node
	const credentials = await this.getCredentials('binanceApi') as IDataObject;

	if (credentials === undefined) {
		throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
	}

	//Make http request according to <https://sendgrid.com/docs/api-reference/>
	const options: OptionsWithUri = {
		method,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${credentials.apiKey}`,
			apiKey: `${credentials.apiKey}`,
			secretKey: `${credentials.apiSecret}`,
		},
		qs,
		body,
		uri: uri || `https://api.binance.com/${endpoint}`,
		json: true,
	};

	if (Object.keys(options.qs).length === 0) {
		delete options.qs;
	}
	if (Object.keys(options.body).length === 0) {
		delete options.body;
	}

	try {
		return this.helpers.request!(options);
	// tslint:disable-next-line:no-any
	} catch (error: any) {
		throw new NodeApiError(this.getNode(), error);
	}
}
