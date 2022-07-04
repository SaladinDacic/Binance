import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	IDataObject,
	INodeCredentialTestResult,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

import {publicApiOperations} from "./descriptions";

import {
	binanceApiRequest,
} from './GenericFunctions';

import {
	OptionsWithUri
} from 'request';

import { version } from '../version';

export class Binance implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Binance',
		name: 'binance',
		icon: 'file:binance.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["method"]}}',
		description: `Consume Binance API (v.${version})`,
		defaults: {
				name: 'Binance',
				color: '#1A82e2',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'binanceApi',
				required: true,
				testedBy: 'testBinanceApiAuth',
			},
		],
		properties: [...publicApiOperations],
	};


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let responseData;
		const returnData: IDataObject[] = [];

		let method: string;
		let endpoint: string;
		const body: IDataObject = {};
		const qs: IDataObject = {}; // query string

		const resource = this.getNodeParameter('method', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		let additionalFields;

		for (let i = 0; i < items.length; i++) {
			try {
				switch (resource) {
					case 'get':
						// ----------------------------------
						//        method:get
						// ----------------------------------
						switch (operation) {
							case 'queryOrder':
							{
								let symbol = this.getNodeParameter('symbol', i) as string;
								let timestamp = this.getNodeParameter('timestamp', i) as number;
								additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
								endpoint = `/order`;
								method = 'GET';
								// .........
								let data: IDataObject = { symbol,timestamp };
								Object.assign(data, additionalFields);
								body[operation] = [ data ]; //don't have shape of the object, and not sure should I create params or send object
								console.log("===========================================================")
								console.log(body)
							}
							break;
							case 'currentOpenOrders':
							{
								let timestamp = this.getNodeParameter('timestamp', i) as number;
								additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
								endpoint = `/openOrders`;
								method = 'GET';
								// .........
								let data: IDataObject = { timestamp };
								Object.assign(data, additionalFields);
								body[operation] = [ data ];
								console.log("===========================================================")
								console.log(body)
							}
							break;
							case 'allOrders':
								{
									let symbol = this.getNodeParameter('symbol', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/allOrders`;
									method = 'GET';
									// .........
									let data: IDataObject = { symbol,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
								break;
							case 'queryOco':
								{
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/orderList`;
									method = 'GET';
									// .........
									let data: IDataObject = { timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'queryAllOco':
								{
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/allOrderList`;
									method = 'GET';
									// .........
									let data: IDataObject = { timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'queryOpenOco':
								{
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/openOrderList`;
									method = 'GET';
									// .........
									let data: IDataObject = { timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'accInfo':
								{
									
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/account`;
									method = 'GET';
									// .........
									let data: IDataObject = { timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'accTradeList':
								{
									let symbol = this.getNodeParameter('symbol', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/myTrades`;
									method = 'GET';
									// .........
									let data: IDataObject = { symbol, timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'queryCurrentOrderCount':
								{
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/rateLimit/order`;
									method = 'GET';
									// .........
									let data: IDataObject = { timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							default: {
								throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not supported for method "${resource}"!`);
							}
						}break;

					case 'post':
						// ----------------------------------
						//        method:post
						// ----------------------------------
						switch (operation){
							case 'newOrder':
								{
									let symbol = this.getNodeParameter('symbol', i) as number;
									let side = this.getNodeParameter('side', i) as number;
									let type = this.getNodeParameter('type', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/order`;
									method = 'POST';
									// .........
									let data: IDataObject = { symbol,side,type,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'cancelOrderSendNew':
								{
									let symbol = this.getNodeParameter('symbol', i) as number;
									let side = this.getNodeParameter('side', i) as number;
									let type = this.getNodeParameter('type', i) as string;
									let cancelReplaceMode = this.getNodeParameter('cancelReplaceMode', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/order/cancelReplace`;
									method = 'POST';
									// .........
									let data: IDataObject = { symbol,side,type,cancelReplaceMode,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'newOco':
								{
									let symbol = this.getNodeParameter('symbol', i) as number;
									let side = this.getNodeParameter('side', i) as number;
									let quantity = this.getNodeParameter('quantity', i) as number;
									let price = this.getNodeParameter('price', i) as number;
									let stopPrice = this.getNodeParameter('stopPrice', i) as number;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/order/oco`;
									method = 'POST';
									// .........
									let data: IDataObject = { symbol,side,quantity,price,stopPrice,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							default: {
								throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not supported for method "${resource}"!`);
							}
						}
						break;

					case 'delete':
						switch(operation){
							case 'cancelOrder':
								{
									let symbol = this.getNodeParameter('symbol', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/order`;
									method = 'DELETE';
									// .........
									let data: IDataObject = { symbol,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'cancelAllOrders':
								{
									let symbol = this.getNodeParameter('symbol', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/openOrders`;
									method = 'DELETE';
									// .........
									let data: IDataObject = { symbol,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;
							case 'cancelOCO':
								{
									let symbol = this.getNodeParameter('symbol', i) as string;
									let timestamp = this.getNodeParameter('timestamp', i) as number;
									additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
									endpoint = `/orderList`;
									method = 'DELETE';
									// .........
									let data: IDataObject = { symbol,timestamp };
									Object.assign(data, additionalFields);
									body[operation] = [ data ];
									console.log("===========================================================")
									console.log(body)
								}
							break;

							default: {
								throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not supported for method "${resource}"!`);
							}
						}
						break;

					default: {
						throw new NodeOperationError(this.getNode(), `The operation method is not supported for resource resource!`);
					}
				}

				responseData = await binanceApiRequest.call(this, method, endpoint, body, qs);

				if (Array.isArray(responseData)) {
					returnData.push.apply(returnData, responseData as IDataObject[]);
				} else if (responseData !== undefined) {
					returnData.push(responseData as IDataObject);
				}
			// tslint:disable-next-line:no-any
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}


	methods = {
		credentialTest: {
			async testBinanceApiAuth(this: ICredentialTestFunctions, credential: ICredentialsDecrypted): Promise<INodeCredentialTestResult> {

				// https://docs.sendgrid.com/api-reference/users-api/retrieve-your-username
				const options: OptionsWithUri = {
					method: 'GET',
					headers: {
						'Accept': ' application/json',
						'Authorization': `Bearer ${credential!.data!.apiKey}`,
					},
					uri: 'https://api.sendgrid.com/v3/marketing/user/username',
					json: true,
				};

				try {
					const response = await this.helpers.request(options);

					if (response.error) {
						return {
							status: 'Error',
							message: `${response.error}`,
						};
					}
				// tslint:disable-next-line:no-any
				} catch (err: any) {
					return {
						status: 'Error',
						message: `${err.message}`,
					};
				}

				return {
					status: 'OK',
					message: 'Connection successful!',
				};
			},
		},
	};
}
