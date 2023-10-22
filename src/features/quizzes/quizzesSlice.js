import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            '456': {
              id: '456',
              topicId: '123',
              name: 'quiz for example topic',
              cardIds: ['789', '101', '102']
            }
          }
    },
    reducers: {
        addQuiz(state, { payload }) {
            state.quizzes = {
                ...state.quizzes,
                [payload.id]:{
                    id: payload.id,
                    topicId: payload.topicId,
                    name: payload.name,
                    cardIds: payload.cardIds
                }
            }
        }
    }
})

//SELECTORS
export const selectQuizzes = (state) => state.quizzes.quizzes
///////////////////////////////////////////////////////////


export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;