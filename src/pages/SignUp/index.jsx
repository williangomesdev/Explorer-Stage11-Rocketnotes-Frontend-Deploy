//useState hook do react que criamos estados

//importar Api
import { api } from "../../services/api";
import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Enviar usuário a uma pagina após uma ação
  const navigate = useNavigate();

  function handleSignUp() {
    //Se nome email ou senha não foi preenchido pelo usuário
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }
    //then = se algo deu certo faça
    //catch = se algo deu errado faça
    api
      .post("users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com secesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
