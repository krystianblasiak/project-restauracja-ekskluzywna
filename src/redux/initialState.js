const initialState = {
    tables: [
        { id: 1, name: "Stolik 1", seats: 4},
        { id: 2, name: "Stolik 2", seats: 2},
        { id: 3, name: "Stolik 3", seats: 2},
        { id: 4, name: "Stolik 4", seats: 8},
        { id: 5, name: "Stolik 5", seats: 4},
        { id: 6, name: "Stolik 6", seats: 2},
        { id: 7, name: "Stolik 7", seats: 8},
        { id: 8, name: "Stolik 8", seats: 2},
        { id: 9, name: "Stolik 9", seats: 4},
        { id: 10, name: "Stolik 10", seats: 8},
        { id: 11, name: "Stolik 11", seats: 2},
        { id: 12, name: "Stolik 12", seats: 2},
    ],

    reservations: [],
    timeSlots: [
        { id: 1, time: "16:00"},
        { id: 2, time: "17:00"},
        { id: 3, time: "18:00"},
        { id: 4, time: "19:00"},
        { id: 5, time: "20:00"},
        { id: 6, time: "21:00"},
    ],
    selectedDate: new Date().toISOString().split("T")[0]
}

export default initialState;