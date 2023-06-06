import React, { createContext, useEffect, useReducer } from 'react';
import { FATCHING_ERROR, FATCHING_START, FATCHING_SUCCESS } from '../State/ActionTypes';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const initialState = {
        loading: false,
        travels: [],
        error: false,
    };

    const reducer = (state, action) => {
        // console.log(action);
        // console.log(state);
        switch (action.type) {
            case FATCHING_START:
                return {
                    ...state,
                    loading: true,
                    error: false,
                }
            case FATCHING_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    travels: action.payload 
                }
            case FATCHING_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true,
                }

            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        dispatch({type: FATCHING_START});

        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => dispatch({ type: FATCHING_SUCCESS, payload: data }))
            .catch(error=> {
                dispatch({type: FATCHING_ERROR})
            })
    }, [])


    const authInfo = {
        state
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;