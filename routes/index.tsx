import { PageProps } from "$fresh/server.ts";

export default function Home() {
  return (
    <div class="body2">
      <form action="/personaje" method="GET" class="search-form">
        <h1>BUSCADOR STAR WARS</h1>
        <input
          type="text"
          name="name"
          placeholder="Ej: Luke Skywalker"
          required
        />
        <button type="submit" class="btn">Buscar</button>
      </form>
    </div>
  );
}