import './App.css';
import Button from "./components/Button/Button"
import LessonCard from './components/LessonCard/LessonCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
import StudentTable from "./components/StudentTable/StudentTable"

function App() {
  return (
    <div className="App">
      <Button />
      <LessonCard />
      <ProfileCard />
      <StudentTable />
    </div>
  );
}

export default App;
