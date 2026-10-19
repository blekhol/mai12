import { useState } from 'react';
import OsztalyAdatok from './components/OsztalyAdatok';
import OsztalyVezerlo from './components/OsztalyVezerlo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [jelenlevok, setJelenlevok] = useState(24);
  const [hangulat, setHangulat] = useState("Átlagos");

  const jelenletNovelese = () => {
    if (jelenlevok < 30) {
      setJelenlevok(jelenlevok + 1);
    }
  };

  const jelenletCsokkentese = () => {
    if (jelenlevok > 0) {
      setJelenlevok(jelenlevok - 1);
    }
  };

  const hangulatValtoztatas = () => {
    if (hangulat === "Átlagos") {
      setHangulat("Jó");
    } else if (hangulat === "Jó") {
      setHangulat("Kiváló");
    } else {
      setHangulat("Átlagos");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Osztálytermi napló</h1>
      <OsztalyAdatok jelenlevok={jelenlevok} hangulat={hangulat} />
      <OsztalyVezerlo
        jelenletNovelese={jelenletNovelese}
        jelenletCsokkentese={jelenletCsokkentese}
        hangulatValtoztatas={hangulatValtoztatas}
      />
    </div>
  );
}