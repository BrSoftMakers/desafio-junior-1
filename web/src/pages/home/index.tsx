import { List } from "../../components/List";
import { Widget } from "../../components/Widget";

export function Home() {
  return (
    <>
      <h1 className="text-center mb-4 text-6xl text-bg-dv py-2 text-white">PetShop</h1>
      <List />
      <Widget />
    </>
  )
}