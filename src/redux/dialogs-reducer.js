const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Katarina'},
        {id: 2, name: 'Serhio'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Alexey'},
        {id: 6, name: 'Iren'},
        {id: 7, name: 'Lora'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ],

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;
