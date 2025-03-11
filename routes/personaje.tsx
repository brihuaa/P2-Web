import { Handlers, PageProps } from "$fresh/server.ts";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

export const handler: Handlers<Character | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name") || "";
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${encodeURIComponent(name)}&format=json`
    );

    if (!response.ok) return ctx.render(null);

    const data = await response.json();
    return ctx.render(data.results[0] || null);
  },
};

// Función para extraer el ID de un recurso (ej. /people/1/ => 1)
const getResourceId = (url: string) =>
  url.split("/").slice(-2, -1)[0];

export default function CharacterPage({
  data,
}: PageProps<Character | null>) {
  if (!data) {
    return (
      <div class="container">
        <div>
          <div>😞</div>
          <h1>Personaje no encontrado</h1>
          <p>Prueba con otro nombre, por ejemplo:</p>
          <div>
            <a href="/personaje?name=Luke">Luke</a>
            <a href="/personaje?name=Vader">Vader</a>
            <a href="/personaje?name=R2">R2-D2</a>
          </div>
          <a href="/">Volver a buscar</a>
        </div>
      </div>
    );
  }

  // Filtramos las propiedades que no son arrays
  const mainProperties = Object.entries(data).filter(
    ([key]) =>
      !["films", "species", "vehicles", "starships", "homeworld"].includes(key)
  );

  return (
    <div class="container">
      <div>
        {/* Encabezado */}
        <div>
          <h1>{data.name}</h1>
          <a href="/">Nueva búsqueda</a>
        </div>

        {/* Tabla de propiedades principales */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <body class= "body1">
              {mainProperties.map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/_/g, " ")}</td>
                  <td>
                    {typeof value === "string" && value.startsWith("http") ? (
                      <a href={value} target="_blank">
                        {getResourceId(value)}
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
              {/* Homeworld */}
              <tr>
                <td>Homeworld</td>
                <td>
                  <ResourceLink url={data.homeworld} type="planets" />
                </td>
              </tr>
            </body>
          </table>
        </div>

        {/* Secciones adicionales */}
        <div>
          <ResourceSection title="Películas" resources={data.films} type="films" />
          <ResourceSection
            title="Naves"
            resources={data.starships}
            type="starships"
          />
          <ResourceSection
            title="Vehículos"
            resources={data.vehicles}
            type="vehicles"
          />
        </div>
      </div>
    </div>
  );
}

function ResourceLink({ url, type }: { url: string; type: string }) {
  const id = getResourceId(url);
  return (
    <a href={`https://swapi.dev/api/${type}/${id}`} target="_blank">
      {id}
    </a>
  );
}

function ResourceSection({
  title,
  resources,
  type,
}: {
  title: string;
  resources: string[];
  type: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      {resources.length > 0 ? (
        <ul>
          {resources.map((url) => (
            <li key={url}>
              <ResourceLink url={url} type={type} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Ninguno</p>
      )}
    </div>
  );
}
