type OsztalyAdatokProps = {
  jelenlevok: number;
  hangulat: string;
};

export default function OsztalyAdatok(props: OsztalyAdatokProps) {
  let szin = "badge bg-secondary";
  if (props.hangulat === "Jó") {
    szin = "badge bg-success";
  } else if (props.hangulat === "Kiváló") {
    szin = "badge bg-primary";
  }

  return (
    <div>
      <p>Jelenlévők száma: {props.jelenlevok}</p>
      <p>
        Aktuális hangulat: <span className={szin}>{props.hangulat}</span>
      </p>
    </div>
  )
}