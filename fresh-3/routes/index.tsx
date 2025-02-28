import Axios from "npm:axios";
import Character from "../components/Character.tsx";
type Character = {
  id: number;
  name: string;
  image: string;
};
type Data = {
  results: Character[];
};
export default async function Home() {
  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );

    return (
      <div>
        <h1>Rick & Morty</h1>
        <ul class="container">
          {characters.data.results.map((ch) => {
            return <Character name={ch.name} img={ch.image} />;
          })}
        </ul>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
