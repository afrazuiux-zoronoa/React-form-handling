import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
function App() {
  const [data, setData] = useState([]);
  function getData(data) {
    setData((prev) => [...prev, data]);
  }

  function deleteCard(id) {
    setData((prev) => prev.filter((data, index) => index !== id));
  }

  function toggleFriend(id) {
    setData((prev) =>
      prev.map((data, index) =>
        index === id ? { ...data, isFriend: !data.isFriend } : data
      )
    );
  }

  return (
    <main className="bg-stone-50 w-full min-h-screen">
      <Navbar
        count={data.length}
        friends={data.filter((data) => data.isFriend).length}
      />
      <Form getData={getData} />
      <div className="w-full justify-center flex gap-8 flex-wrap p-10">
        {data.map((data, index) => (
          <Card
            key={index}
            id={index}
            name={data?.name}
            verse={data?.verse}
            imgURL={data?.imgURL}
            deleteCard={deleteCard}
            toggleFriend={toggleFriend}
            isFriend={data?.isFriend}
          />
        ))}
      </div>
    </main>
  );
}
export default App;
