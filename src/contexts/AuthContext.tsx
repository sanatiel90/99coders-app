import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
    logado: boolean;
    atribuiLogado: (estado: boolean) => void;
}

export const AuthContext = createContext({} as AuthContextType );

interface AuthContextProviderProps {
    children: ReactNode;
} 

export function AuthContextProvider({ children }: AuthContextProviderProps){

    const isLogado = localStorage.getItem('logado');
    const [logado, setLogado] = useState(isLogado === 'S');

    function atribuiLogado(estado: boolean){
        setLogado(estado);
    }

    return (
        <AuthContext.Provider value={ { logado, atribuiLogado } }>
            {children}
        </AuthContext.Provider>
           
    )
}


