import { createContext, useReducer, type ReactNode } from "react"

type UserState = {
    id: string
    role: string
    name?: string
}

type UserAction = {
    type: "SET_USER" | 'REMOVE_USER'
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
                name: action.payload.name
            }
        case "REMOVE_USER":
            return { id: "", role: "", name: "" }
        default:
            return state
    }
}

type Props = {
    children: ReactNode
}

const storedUser = localStorage.getItem("user");
const initialUserState: UserState = storedUser
    ? JSON.parse(storedUser)
    : { id: "", role: "", name: "" };


export default function UserProvider({ children }: Props) {
    const [user, dispatch] = useReducer(userReducer, initialUserState)

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
