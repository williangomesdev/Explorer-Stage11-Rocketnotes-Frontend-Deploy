import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

//Redirecionar rotas caso o usuário estiver logado
import { useAuth } from '../hooks/auth'

export function Routes() {
    const { user } = useAuth()
    return (
        <BrowserRouter>
        {/* se houver um usuário acesse a rota do app senão fique na rota de autenticação */}
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}