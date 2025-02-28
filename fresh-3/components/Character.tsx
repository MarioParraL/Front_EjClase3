import { FunctionComponent } from "preact/src/index.d.ts";

export type Props = {
  name: string;
  img: string;
};

const Character: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <p>
        <img src={props.img} />
      </p>
      <h2>{props.name}</h2>
    </div>
  );
};

export default Character;
