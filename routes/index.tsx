import { PageProps } from "$fresh/server.ts";

export default function Home() {
  return (

      <div class="body2">
        <form action="/personaje" method="GET">
        <h1 >
            SEARCH
          </h1>
          <div >
            <input
              type="text"
              name="name"
              placeholder="Escribe algo..."
            />

            
          </div>
          <div >
            <button type="submit">
                Buscar personaje
              </button>
          </div>
        </form>
      </div>
  );
}