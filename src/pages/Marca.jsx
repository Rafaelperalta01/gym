

import { useParams } from 'react-router-dom';

const marcasValidas = ['']

export default function Marca() {
  const { marca } = useParams();

  return (
    <div>
      <h1>Información sobre {marca}</h1>
    </div>
  );
}
