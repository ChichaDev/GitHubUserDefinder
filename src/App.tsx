import { useState } from "react";
import { Container } from "./components/Container/Container";
import { Search } from "./components/Search/Search";
import { TheHeader } from "./components/TheHeader/TheHeader";
import { UserCard } from "./components/UserCard/UserCard";
import { defaultUser } from "./mock";
import { GithubError, GithubUser, LocalGithubUser } from "./types";
import { extractLocalUser } from "./utils/extract-local-user";
import { isGithubUser } from "./utils/typeguard";

const BASE_URL = "http://api.github.com/users/"

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (text: string) => {
    const url = BASE_URL + text
    const response = await fetch(url)
    const user = await response.json() as GithubUser | GithubError
    if(isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }

  }

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard {...user} />
      )}
      
    </Container>
  );
}

export default App;



