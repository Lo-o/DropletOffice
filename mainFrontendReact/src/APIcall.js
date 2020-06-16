import React from "react";

export async function getQuestion(loginInfo) {
  const res = await fetch("http://178.128.254.113:5566/api/v1/questions");
  const json = await res.json();
  return json;
}
export default { getQuestion };

// export function APIcall() {
//   const [error, setError] = React.useState(null);
//   const [isLoaded, setIsLoaded] = React.useState(false);
//   const [items, setItems] = React.useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   React.useEffect(() => {
//     fetch("http://178.128.254.113:5566/api/v1/questions")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result.data);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     console.log(typeof items);

//     console.log(items.map((item) => <li>{item.id}</li>));
//     return items;
//     //   <ul class="flex-grow">
//     //     {items.map((item) => (
//     //       <li key={item.id}>
//     //         {item.id} {item.question} {item.correct_answer}
//     //       </li>
//     //     ))}
//     //   </ul>
//   }
// }
