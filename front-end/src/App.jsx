import SignupForm from "./components/SignupForm"

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <SignupForm />
    </div>
  );
}

export default App;