import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/jcmartins81",
};
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositório</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
