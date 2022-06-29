import {
	INodeProperties,
} from 'n8n-workflow';

export const optionalFields = [
    // ----------------------------------
    // add optional "New Order" operations //post
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOrder'],
            },
        },
        options: [
            {
                displayName: 'Time In Force',
                name: 'timeInForce',
                type: 'string',
                default: "",
                required: false,
            },
            {
                displayName: 'Quantity',
                name: 'quantity',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                required: false,
            },
            {
                displayName: 'Quote Order Qty',
                name: 'quoteOrderQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Price',
                name: 'price',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            },
            {
                displayName: 'New Client Order Id',
                name: 'newClientOrderId',
                type: 'string',
                description: 'A unique id among open orders. Automatically generated if not sent.',
                default: "",
                required: false,
            },
            {
                displayName: 'Stop Price',
                name: 'stopPrice',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                description: "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Trailing Delta',
                name: 'trailingDelta',
                type: 'number',
                description: 'Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. For more details on SPOT implementation on trailing stops, please refer to Trailing Stop FAQ',
                default: 0,
                required: false,
            },
            {
                displayName: 'Iceberg Qty',
                name: 'icebergQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                description: "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
                default: 0.00,
                required: false,
            },
            {
                displayName: 'New Order Resp Type',
                name: 'newOrderRespType',
                type: 'string',
                description:'Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK.',
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                description: "The value cannot be greater than 60000",
                default: 0,
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Cancel Order" operations //delete
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['delete'],
                operation: ['cancelOrder'],
            },
        },
        options: [
            {
                displayName: 'Order Id',
                name: 'orderId',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Orig Client Order Id',
                name: 'origClientOrderId',
                type: 'string',
                default: "",
                required: false,
            },
            {
                displayName: 'New Client Order Id',
                name: 'newClientOrderId',
                type: 'string',
                description: "Used to uniquely identify this cancel. Automatically generated by default.",
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Cancel all Open Orders" operations //delete
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['delete'],
                operation: ['cancelAllOrders'],
            },
        },
        options: [
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Query Order" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['queryOrder'],
            },
        },
        options: [
            {
                displayName: 'Order Id',
                name: 'orderId',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Orig Client Order Id',
                name: 'origClientOrderId',
                type: 'string',
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Cancel an Existing Order and Send a New Order" operations //post
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['cancelOrderSendNew'],
            },
        },
        options: [
            {
                displayName: 'Time In Force',
                name: 'timeInForce',
                type: 'string',
                default: "",
                required: false,
            },
            {
                displayName: 'Quantity',
                name: 'quantity',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                required: false,
            },
            {
                displayName: 'Quote Order Qty',
                name: 'quoteOrderQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Price',
                name: 'price',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Cancel New Client Order Id',
                name: 'cancelNewClientOrderId',
                type: 'string',
                description: 'Used to uniquely identify this cancel. Automatically generated by default.',
                default: "",
                required: false,
            },
            {
                displayName: 'Cancel Orig Client Order Id',
                name: 'cancelOrigClientOrderId',
                type: 'string',
                description: 'Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.',
                default: "",
                required: false,
            },
            {
                displayName: 'Cancel Order Id',
                name: 'cancelOrderId',
                type: 'number',
                description: `Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.`,
                default: 0,
                required: false,
            },
            {
                displayName: 'New Client Order Id',
                name: 'newClientOrderId',
                type: 'string',
                description: 'Used to identify the new order.',
                default: "",
                required: false,
            },
            {
                displayName: 'Stop Price',
                name: 'stopPrice',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                description: "Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Trailing Delta',
                name: 'trailingDelta',
                type: 'number',
                description: 'Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. For more details on SPOT implementation on trailing stops, please refer to Trailing Stop FAQ',
                default: 0,
                required: false,
            },
            {
                displayName: 'Iceberg Qty',
                name: 'icebergQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                description: "Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.",
                default: 0.00,
                required: false,
            },
            {
                displayName: 'New Order Resp Type',
                name: 'newOrderRespType',
                type: 'string',
                description:`Allowed values:
                ACK, RESULT, FULL
                MARKET and LIMIT orders types default to FULL; all other orders default to ACK`,
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                description: "The value cannot be greater than 60000",
                default: 0,
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Current Open Orders" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['currentOpenOrders'],
            },
        },
        options: [
            {
                displayName: 'Symbol',
                name: 'symbol',
                type: 'string',
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "All Orders" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['allOrders'],
            },
        },
        options: [
            {
                displayName: 'Order Id',
                name: 'orderId',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Start Time',
                name: 'startTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'End Time',
                name: 'endTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                default:0,
                description: "Default 500; max 1000.",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "New Oco" operations //post
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOco'],
            },
        },
        options: [
            {
                displayName: 'List Client Order Id', //M
                name: 'listClientOrderId',
                type: 'string',
                default: "",
                description: "A unique Id for the entire orderList",
                required: false,
            }, 
            {
                displayName: 'Limit Client Order Id', //M
                name: 'limitClientOrderId',
                type: 'string',
                default: "",
                description: "A unique Id for the limit order",
                required: false,
            }, 
            {
                displayName: 'Limit Iceberg Qty', //M
                name: 'limitIcebergQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            }, 
            {
                displayName: 'Trailing Delta',
                name: 'trailingDelta',
                type: 'number',
                default: 0,
                required: false,
            },
            {
                displayName: 'Stop Client Order Id',
                name: 'stopClientOrderId',
                type: 'string',
                description: 'A unique Id for the stop loss/stop loss limit leg',
                default: "",
                required: false,
            },
            {
                displayName: 'Stop Limit Price', //M
                name: 'stopLimitPrice',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                description: "If provided, stopLimitTimeInForce is required.",
                required: false,
            }, 
            {
                displayName: 'Stop Iceberg Qty',
                name: 'stopIcebergQty',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0.00,
                required: false,
            },
            {
                displayName: 'Stop Limit Time In Force',
                name: 'stopLimitTimeInForce',
                type: 'string',
                description: "Valid values are GTC/FOK/IOC",
                default: "",
                required: false,
            },
            {
                displayName: 'New Order Resp Type',
                name: 'newOrderRespType',
                type: 'string',
                description: "Set the response JSON.",
                default: "",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                description: "The value cannot be greater than 60000",
                default: 0,
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Cancel Oco" operations //delete
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['delete'],
                operation: ['cancelOCO'],
            },
        },
        options: [
            {
                displayName: 'Order List Id',
                name: 'orderListId',
                type: 'number',
                default:0,
                description:"Either orderListId or listClientOrderId must be provided",
                required: false,
            },
            {
                displayName: 'List Client Order Id',
                name: 'listClientOrderId',
                type: 'string',
                default: "",
                description:"Either orderListId or listClientOrderId must be provided",
                required: false,
            },
            {
                displayName: 'New Client Order Id',
                name: 'newClientOrderId',
                type: 'string',
                default: "",
                description: "Used to uniquely identify this cancel. Automatically generated by default.",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Query OCO" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['queryOco'],
            },
        },
        options: [
            {
                displayName: 'Order List Id',
                name: 'orderListId',
                type: 'number',
                default:0,
                description:'Either orderListId or origClientOrderId must be provided',
                required: false,
            },
            {
                displayName: 'Orig Client Order Id',
                name: 'origClientOrderId',
                type: 'string',
                default: "",
                description:'Either orderListId or origClientOrderId must be provided',
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Query All Oco" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['queryAllOco'],
            },
        },
        options: [
            {
                displayName: 'Form Id',
                name: 'formId',
                type: 'number',
                default:0,
                description:'If supplied, neither startTime or endTime can be provided',
                required: false,
            },
            {
                displayName: 'Start Time',
                name: 'startTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'End Time',
                name: 'endTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                default:0,
                description: "Default 500; max 1000.",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Query Open Oco" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['queryOpenOco'],
            },
        },
        options: [
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Account Information" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['accInfo'],
            },
        },
        options: [
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
        // ----------------------------------
    // add optional "All Orders" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['accTradeList'],
            },
        },
        options: [
            {
                displayName: 'Order Id',
                name: 'orderId',
                type: 'number',
                default:0,
                description:'This can only be used in combination with symbol.',
                required: false,
            },
            {
                displayName: 'Start Time',
                name: 'startTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'End Time',
                name: 'endTime',
                type: 'number',
                default:0,
                required: false,
            },
            {
                displayName: 'Form Id',
                name: 'formId',
                type: 'number',
                default:0,
                description:'TradeId to fetch from. Default gets most recent trades.',
                required: false,
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                default:0,
                description: "Default 500; max 1000.",
                required: false,
            },
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
    // ----------------------------------
    // add optional "Query Current Order Count Usage" operations //get
    // ----------------------------------
    {
		displayName: 'Add Optional Operations',
		name: 'optionalPostOperations',
		type: 'collection',
    	placeholder: 'Add Field',
    	default: {},
		required: false,
		typeOptions: {
            multipleValues: false,
		},
        displayOptions: {
            show: {
                method : ['get'],
                operation: ['queryCurrentOrderCount'],
            },
        },
        options: [
            {
                displayName: 'Recv Window',
                name: 'recvWindow',
                type: 'number',
                default:0,
                description: "The value cannot be greater than 60000.",
                required: false,
            },
        ],
	},
]