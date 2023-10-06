import Start from "../components/Start";
import { useStart } from "../stores/Start";

export default function Home() {
  const { start, toggleStart } = useStart();
  console.log(start);
  return (
    <section>
      {start && <Start toggleStart={toggleStart} />}
      <h1>home Page</h1>
    </section>
  );
}
