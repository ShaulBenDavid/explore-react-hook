import { useState, useTransition } from "react";
import "../App.css";
import List from "../List";

function Form() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  //   const isPending = false;

  const LIST_SIZE = 10000;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    startTransition(() => {
      const l: string[] = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? <div>Loading...</div> : <List list={list} />}
    </>
  );
}

export default Form;
