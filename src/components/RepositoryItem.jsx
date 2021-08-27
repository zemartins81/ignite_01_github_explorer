export function RepositoryItem({ repository }) {
  const { name, description, html_url } = repository;
  return (
    <li>
      <strong>{name ?? "Default"}</strong>
      <p>{description}</p>
      <a href={html_url}>Acessar repositório</a>
    </li>
  );
}
