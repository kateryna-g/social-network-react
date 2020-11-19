import {InferActionsTypes} from "./redux-store";


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


const dialogsReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SN/dialogs/SEND-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state
    }
}



export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/dialogs/SEND-MESSAGE', newMessageBody} as const)
}



export default dialogsReducer



export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
