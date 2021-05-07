import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  const onsubmit = async () => {
    try {
      const user = await axios.post(
        "http://localhost:5000/api/users",
        {
          name: "ahemd",
          email: "gffdhjfvxcfhf@gamil.com",
          password: "123456789",
        },
        { withCredentials: true }
      );
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const onsubmit2 = async () => {
    try {
      const user = await axios.get("http://localhost:5000/api/auth");
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="App" onClick={() => onsubmit()}>
        app
      </div>
      <div className="App" onClick={() => onsubmit2()}>
        app2
      </div>
    </>
  );
}

export default App;
