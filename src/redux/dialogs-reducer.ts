const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'Katarina'},
        {id: 2, name: 'Serhio'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Alexey'},
        {id: 6, name: 'Iren'},
        {id: 7, name: 'Lora'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ] as Array<MessagesType>
}
export type InitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer
