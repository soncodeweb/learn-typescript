/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "04/08/2022",
  },
];

//#region object
// const object: {} = {}
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: (string | number)[];
  scores: number[];
} = {
  firstName: "Le",
  lastName: "Quang Son",
  age: 22,
  isStudent: ["Cao Thang", "GTVT", 23],
  scores: [0, 10, 20],
};
//#endregion

function App() {
  // const [count, setCount] = useState(0);

  //#region Primitive types
  function displayReview(
    totalReview: number,
    name: string,
    premiumUser: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReview}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premiumUser ? "⭐️" : ""}
      </>
    );
  }
  //#endregion

  return (
    <div className="App">
      <div className="review">
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[1].name,
            reviews[1].premiumUser
          )}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
