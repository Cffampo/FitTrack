import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { Workout } from "../types";

interface WorkoutState {
    workouts: Workout[] | null;
    error: string | null;
    isLoading: boolean;
}

type WorkoutAction =
    | { type: 'SET_WORKOUTS'; payload: Workout[] | null }
    | { type: 'CREATE_WORKOUT'; payload: Workout }
    | { type: 'DELETE_WORKOUT'; payload: { _id: string } };

interface WorkoutContextType extends WorkoutState {
    dispatch: Dispatch<WorkoutAction>;
}

export const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const workoutReducer = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: action.payload,
            }
        case 'CREATE_WORKOUT':
            return {
                ...state,
                workouts: state.workouts ? [action.payload, ...state.workouts] : [action.payload],
            }
        case 'DELETE_WORKOUT':
            return {
                ...state,
                workouts: state.workouts ? state.workouts.filter((w) => w._id !== action.payload._id) : null
            }
        default:
            return state
    }
}

interface WorkoutContextProviderProps {
    children: ReactNode;
}

export const WorkoutContextProvider = ({ children }: WorkoutContextProviderProps) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null,
        error: null,
        isLoading: true
    })

    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}