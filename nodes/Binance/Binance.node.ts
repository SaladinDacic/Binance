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
		let body: IDataObject = {};
		const qs: IDataObject = {}; // query string

		const operation = this.getNodeParameter('operation', 0) as string;
		let additionalFields;

		var endPointAddition = function strMaker(obj:any){
			var arrOfStr = Object.keys(obj).map(key=>{
				if (obj[key] == 0 ){obj[key] = "0"}
				return `${key}=${obj[key]}`
			})
			var str = "?" + arrOfStr.join("&")
			return str
		}

		for (let i = 0; i < items.length; i++) {
			try {
				switch (operation) {
					case 'queryOrder':
					{
						let symbol = this.getNodeParameter('symbol', i) as string;
						let timestamp = this.getNodeParameter('timestamp', i) as number;
						additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
						method = 'GET';
						// .........
						let data: IDataObject = { symbol,timestamp };
						Object.assign(data, additionalFields);
						body = data //don't have shape of the object, and not sure should I create params or send object
						console.log("===========================================================")
						endpoint = `/order${endPointAddition(body)}`;
						console.log(body, endpoint)
					}
					break;
					case 'currentOpenOrders':
					{
						let timestamp = this.getNodeParameter('timestamp', i) as number;
						additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
						method = 'GET';
						// .........
						let data: IDataObject = { timestamp };
						Object.assign(data, additionalFields);
						body = data
						console.log("===========================================================")
						endpoint = `/openOrders${endPointAddition(body)}`;
						console.log(body, endpoint)
					}
					break;
					case 'allOrders':
						{
							let symbol = this.getNodeParameter('symbol', i) as string;
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { symbol,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/allOrders${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
						break;
					case 'queryOco':
						{
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/orderList${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'queryAllOco':
						{
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/allOrderList${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'queryOpenOco':
						{
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/openOrderList${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'accInfo':
						{
							
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/account${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'accTradeList':
						{
							let symbol = this.getNodeParameter('symbol', i) as string;
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { symbol, timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/myTrades${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'queryCurrentOrderCount':
						{
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'GET';
							// .........
							let data: IDataObject = { timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/rateLimit/order${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'newOrder':
						{
							let symbol = this.getNodeParameter('symbol', i) as number;
							let side = this.getNodeParameter('side', i) as number;
							let type = this.getNodeParameter('type', i) as string;
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'POST';
							// .........
							let data: IDataObject = { symbol,side,type,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/order${endPointAddition(body)}`;
							console.log(body, endpoint)
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
							method = 'POST';
							// .........
							let data: IDataObject = { symbol,side,type,cancelReplaceMode,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/order/cancelReplace${endPointAddition(body)}`;
							console.log(body, endpoint)
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
							method = 'POST';
							// .........
							let data: IDataObject = { symbol,side,quantity,price,stopPrice,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/order/oco${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
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
							body = data
							console.log("===========================================================")
							endpoint = `/order${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
							break;
					case 'cancelAllOrders':
						{
							let symbol = this.getNodeParameter('symbol', i) as string;
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'DELETE';
							// .........
							let data: IDataObject = { symbol,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/openOrders${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;
					case 'cancelOCO':
						{
							let symbol = this.getNodeParameter('symbol', i) as string;
							let timestamp = this.getNodeParameter('timestamp', i) as number;
							additionalFields = this.getNodeParameter('optionalPostOperations', i) as IDataObject;
							method = 'DELETE';
							// .........
							let data: IDataObject = { symbol,timestamp };
							Object.assign(data, additionalFields);
							body = data
							console.log("===========================================================")
							endpoint = `/orderList${endPointAddition(body)}`;
							console.log(body, endpoint)
						}
					break;

					default: {
						throw new NodeOperationError(this.getNode(), `The operation "${operation}" is not supported"!`);
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
