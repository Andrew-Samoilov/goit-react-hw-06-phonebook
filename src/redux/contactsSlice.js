import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = Object.freeze([
    { id: 'id-1', name: 'Rosie SIIimpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);

// const getInitialContacts = () => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//         const parsedContacts = JSON.parse(savedContacts);
//         return parsedContacts;
//     }
//     return initialContacts;
// };

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (state.filter(contact => contact.name === action.payload.name).length > 0) {
                    alert(`${state.name} is alredy in contacts.`);
                } else {
                    state.push(action.payload);
                }      
            },
            prepare(text) {
                return {
                    payload: {
                            id: nanoid(),
                            name: text.name,
                            number: text.number,  
                    },
                };
            },
            
        },
        deleteContact(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
