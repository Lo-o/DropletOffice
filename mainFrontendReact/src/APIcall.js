import React from "react";

export function APIcall() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  React.useEffect(() => {
    fetch("http://178.128.254.113:5566/api/v1/questions")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result.items);
          console.log(items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items);
    return (
      <div>Hello</div>

      //   <ul>
      //     {items.map((item) => (
      //       <li key={item.name}>
      //         {item.name} {item.price}
      //       </li>
      //     ))}
      //   </ul>
    );
  }
}
