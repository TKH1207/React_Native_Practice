export const CHANGE_NAME = 'CHANGE_NAME'

export function changeName2(newName) {
    return {
        type: CHANGE_NAME,
        payload: { newName: newName }
    }
}