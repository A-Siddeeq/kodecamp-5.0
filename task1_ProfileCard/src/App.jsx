import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <ProfileCard
        image={"./pic.jpg"}
        name="Abubakar Sadiq"
        bio="I am Abubakar Sadiq, a React intermediate student in kodecamp 5.0, fueled by enthusiasm for tech, and a love for learning. I dive into other fields, such as design and science, and always strive to learn something new."
      />
    </>
  );
}

export default App;
