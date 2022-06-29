import { mainMethods } from './chuncks';
import { requiredFields } from './chuncks';
import { optionalFields } from './chuncks';
import {
	INodeProperties,
} from 'n8n-workflow';

export const publicApiOperations = [
    // ----------------------------------
    //         Methods setup
    // ----------------------------------
    {
        displayName: 'Method',
        name: 'method',
        required: true,
        type: 'options',
        options: [
            {
                name: 'Get',
                value: 'get',
            },
            {
                name: 'Create/Update data (Post)',
                value: 'post',
            },
            {
                name: 'Remove',
                value: 'delete',
            },
        ],
        default: 'get',
        description: 'Methods to use',
    },

    // ----------------------------------
    //     all three main Methods
    // ----------------------------------
    ...mainMethods,

    // ----------------------------------
    //      All required fields
    // ----------------------------------
    ...requiredFields,

    // ----------------------------------
    //      All optional fields
    // ----------------------------------
    ...optionalFields,




] as INodeProperties[];
