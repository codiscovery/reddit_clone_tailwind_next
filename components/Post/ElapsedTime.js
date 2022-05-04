import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
function ElapsedTime({ date }) {
  const displayDate = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: fr,
  });
  return <div>{displayDate}</div>;
}

export default ElapsedTime;
