import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_background.svg";

//importando hook de auth
import { useAuth } from "../../hooks/auth";

export function Header() {
  /* importando a funcionalidade */
  const { signOut, user } = useAuth();

  //Atualizar foto de usuário
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
