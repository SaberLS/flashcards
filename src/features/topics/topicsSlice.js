import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const topicsSlice = createSlice({
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
        addTopic(state, { payload }) {
            state.topics = {
                ...state.topics,
                [payload.id]: {
                    id: payload.id,
                    name: payload.name,
                    icon: payload.icon,
                    quizIds: []
                }
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, { payload } ) => {
            state.topics[payload.topicId].quizIds.push(payload.id);
        })
    }
})

//SELECTORS
export const selectTopics = (state) => state.topics.topics;

///////////////////////////////////////////////////////////

export const {
    addTopic
 } = topicsSlice.actions;
export default topicsSlice.reducer;