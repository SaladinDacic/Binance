import {
	INodeProperties,
} from 'n8n-workflow';

export const mainMethods = [
    // ----------------------------------
    //        get operation
    // ----------------------------------
    {
        displayName: 'Get Operations',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                method: ['get'],
            },
        },
        options: [
            {
                name: 'Query Order (USER_DATA)',
                value: 'queryOrder',
                description: "Check an order's status.",
            },
            {
                name: 'Current Open Orders (USER_DATA)',
                value: 'currentOpenOrders',
                description: 'Get all open orders on a symbol. Careful when accessing this with no symbol.',
            },
            {
                name: 'All Orders (USER_DATA)',
                value: 'allOrders',
                description: 'Get all account orders; active, canceled, or filled.',
            },
            {
                name: 'Query OCO (USER_DATA)',
                value: 'queryOco',
                description: 'Retrieves a specific OCO based on provided optional parameters',
            },
            {
                name: 'Query all OCO (USER_DATA)',
                value: 'queryAllOco',
                description: 'Retrieves all OCO based on provided optional parameters',
            },
            {
                name: 'Query Open OCO (USER_DATA)',
                value: 'queryOpenOco',
                description: 'Query Open OCO (USER_DATA)',
            },
            {
                name: 'Account Information (USER_DATA)',
                value: 'accInfo',
                description: 'Get current account information.',
            },
            {
                name: 'Account Trade List (USER_DATA)',
                value: 'accTradeList',
                description: 'Get trades for a specific account and symbol.',
            },
            {
                name: 'Query Current Order Count Usage (TRADE)',
                value: 'queryCurrentOrderCount',
                description: "Displays the user's current order count usage for all intervals.",
            },
        ],
        // default: 'getDevices',
        description: 'List of get operations',
    },
    // ----------------------------------
    //        post operation
    // ----------------------------------
    {
        displayName: 'Post Operations',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                method: ['post'],
            },
        },
        options: [
            {
                name: 'New Order (TRADE)',
                value: 'newOrder',
                description: 'Send in a new order..',
            },
            {
                name: 'Cancel an Existing Order and Send a New Order (TRADE)',
                value: 'cancelOrderSendNew',
                description: `Cancels an existing order and places a new order on the same symbol. 
                Filters are evaluated before the cancel order is placed. 
                If the new order placement is successfully sent to the engine, the order count will increase by 1.`,
            },
            {
                name: 'New OCO (TRADE)',
                value: 'newOco',
                description: 'Send in a new OCO',
            },
        ],
        // default: 'getDevices',
        description: 'List of post operations',
    },
    // ----------------------------------
    //        delete operation
    // ----------------------------------
    {
        displayName: 'Delete Operations',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                method: ['delete'],
            },
        },
        options: [
            {
                name: 'Cancel Order (TRADE)',
                value: 'cancelOrder',
                description: 'Cancel an active order.',
            },
            {
                name: 'Cancel all Open Orders on a Symbol (TRADE)',
                value: 'cancelAllOrders',
                description: 'Cancels all active orders on a symbol.This includes OCO orders.',
            },
            {
                name: 'Cancel OCO (TRADE)',
                value: 'cancelOCO',
                description: 'Cancel OCO (TRADE)',
            },
        ],
        // default: 'getDevices',
        description: 'List of delete operations',
    },
]