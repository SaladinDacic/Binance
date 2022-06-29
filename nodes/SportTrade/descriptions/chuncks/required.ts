import {
	INodeProperties,
} from 'n8n-workflow';

export const requiredFields = [
	// ----------------------------------
    //        All operations
    // ----------------------------------
	{
        displayName: 'Symbol', //M
        name: 'symbol',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                method : ['get','post','delete'],
                operation: ['newOrder','cancelOrder','cancelAllOrders','queryOrder','cancelOrderSendNew','allOrders','newOco','cancelOCO','accTradeList'],
            },
        },
        required: true,
    },
    {
        displayName: 'Side', //M
        name: 'side',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOrder','cancelOrderSendNew','newOco'],
            },
        },
        required: true,
    },
    {
        displayName: 'Quantity', //M
        name: 'quantity',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0.00,
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOco'],
            },
        },
        required: true,
    },
    {
        displayName: 'Price', //M
        name: 'price',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0.00,
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOco'],
            },
        },
        required: true,
    },
    {
        displayName: 'Stop Price', //M
        name: 'stopPrice',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0.00,
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOco'],
            },
        },
        required: true,
    },
    {
        displayName: 'Type', //M
        name: 'type',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['newOrder','cancelOrderSendNew'],
            },
        },
        required: true,
    },
    {
        displayName: 'Cancel Replace Mode', //M
        name: 'cancelReplaceMode',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                method : ['post'],
                operation: ['cancelOrderSendNew'],
            },
        },
        description:`The allowed values are:
        STOP_ON_FAILURE - If the cancel request fails, the new order placement will not be attempted.
        ALLOW_FAILURES - new order placement will be attempted even if cancel request fails.`,
        required: true,
    },
    {
        displayName: 'Timestamp', //M
        name: 'timestamp',
        type: 'number',
        default: 0,
        displayOptions: {
            show: {
                method : ['get','post','delete'],
                operation: ['newOrder','cancelOrder','cancelAllOrders','queryOrder','cancelOrderSendNew','currentOpenOrders','allOrders','newOco','cancelOCO','queryOco','queryAllOco','queryOpenOco','accInfo','','queryCurrentOrderCount','accTradeList'],
            },
        },
        required: true,
    },
]