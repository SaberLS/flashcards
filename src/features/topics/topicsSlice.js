import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '123': {
              id: '123',
              name: 'example topic',
              icon: 'icon url',
              quizIds: ['456']
            }
        }
    },
    reducers:{
        addTopic(state, action) {
            const { payload } = action;
            state.topics = {
                [payload.id]: {
                    id: payload.id,
                    name: payload.name,
                    icon: payload.icon,
                    quizIds: []
                }
            };
        }
    }
})

//SELECTORS
export const selectTopics = (state) => state.topics.topics;

///////////////////////////////////////////////////////////

export const {
    addTopic
 } = topicsSlice.actions;
export default topicsSlice.reducer;