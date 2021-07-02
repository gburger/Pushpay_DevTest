import People from "../People";

function App() {
  return (
    <div>
      <header className="m-0" />
      <div
        style={{
          backgroundImage: `url("https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg")`,
          margin: 0,
        }}
      >
        <People />;
      </div>
    </div>
  );
}

export default App;
