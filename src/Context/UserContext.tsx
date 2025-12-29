import { createContext, useReducer, type ReactNode } from "react"

type UserState = {
    id: string
    role: string
}

type UserAction = {
    type: "SET_USER"
    payload: UserState
}

type UserContextType = {
    user: UserState
    dispatch: React.Dispatch<UserAction>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case "SET_USER":
            return {
                id: action.payload.id,
                role: action.payload.role,
            }
        default:
            return state
    }
}

type Props = {
    children: ReactNode
}

export default function UserProvider({ children }: Props) {
    const [user, dispatch] = useReducer(userReducer, {
        id: "",
        role: "",
    })

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
