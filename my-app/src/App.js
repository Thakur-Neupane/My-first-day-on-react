import "./App.css";
import { Counter } from "./Counter";
import { Form } from "./Form";

import HeadLine, { News } from "./Headline";
import { UserList } from "./UserList";

const App = () => {
  const info = "ABC News Paper";
  const t1 = "World cup";
  const t2 = "Concert";
  const t3 = "local sports event";

  return (
    <>
      <div className="">
        {/* <Counter /> */}
        {/* <h1>{info}</h1> */}
        {/* <HeadLine /> */}
        {/* <News title={t1} /> */}
        {/* <News title={t2} /> */}
        {/* <News title="type here" /> */}
        {/* <UserList /> */}

        {/* challange  */}
        <h2>challange</h2>

        <Form />
      </div>
    </>
  );
};

export default App;