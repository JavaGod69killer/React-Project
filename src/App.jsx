import "./App.css";
import PostList from "./component/PostList";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <main className="bg-stone-900 grid py-4 min-h-screen">
        <Todo />
      </main>
    </>
  );
}

export default App;
