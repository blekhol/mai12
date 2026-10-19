type OsztalyVezerloProps = {
  jelenletNovelese: () => void;
  jelenletCsokkentese: () => void;
  hangulatValtoztatas: () => void;
};

export default function OsztalyVezerlo(props: OsztalyVezerloProps) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.jelenletNovelese}>
        Jelenlét növelése
      </button>
      <button className="btn btn-danger ms-2" onClick={props.jelenletCsokkentese}>
        Jelenlét csökkentése
      </button>
      <button className="btn btn-warning ms-2" onClick={props.hangulatValtoztatas}>
        Hangulat változtatása
      </button>
    </div>
  )
}