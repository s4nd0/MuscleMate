import React, { useEffect, useState } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { useAuthContext } from "../hooks/useAuthContext";

// firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

// styles
import "./Create.css";
import "../components/PlanWindow.css";
import PlanDayView from "../components/PlanDayView";

const Create = () => {
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [row, setRow] = useState([]);
  const [exerciseArray, setExerciseArray] = useState([]);
  const [setsArray, setSetsArray] = useState([]);
  const [repsArray, setRepsArray] = useState([]);
  const [error, setError] = useState(null);
  const [exerciseError, setExerciseError] = useState(null);
  // useState for days
  const [monday, setMonday] = useState({
    id: 0,
    name: "Rest Day",
  });
  const [tuesday, setTuesday] = useState({
    id: 1,
    name: "Rest Day",
  });
  const [wednesday, setWednesday] = useState({
    id: 2,
    name: "Rest Day",
  });
  const [thursday, setThursday] = useState({
    id: 3,
    name: "Rest Day",
  });
  const [friday, setFriday] = useState({
    id: 4,
    name: "Rest Day",
  });
  const [saturday, setSaturday] = useState({
    id: 5,
    name: "Rest Day",
  });
  const [sunday, setSunday] = useState({
    id: 6,
    name: "Rest Day",
  });

  const { user } = useAuthContext();

  const days = [
    { value: "0", label: "Monday" },
    { value: "1", label: "Tuesday" },
    { value: "2", label: "Wednesday" },
    { value: "3", label: "Thursday" },
    { value: "4", label: "Friday" },
    { value: "5", label: "Saturday" },
    { value: "6", label: "Sunday" },
  ];

  const names = [
    { value: "chest and tricep", label: "Chest and Tricep" },
    { value: "back and bicep", label: "Back and Bicep" },
    { value: "legs and shoulders", label: "Legs and shoulders" },
  ];

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    setRow([...row, { exercise: exercise, sets: sets, reps: reps }]);
    setExerciseArray([...exerciseArray, exercise]);
    setSetsArray([...setsArray, sets]);
    setRepsArray([...repsArray, reps]);
    setExercise("");
    setSets("");
    setReps("");
  };

  const createObject = (obj) => {
    switch (day) {
      case "0":
        setMonday(obj);
        break;
      case "1":
        setTuesday(obj);
        break;
      case "2":
        setWednesday(obj);
        break;
      case "3":
        setThursday(obj);
        break;
      case "4":
        setFriday(obj);
        break;
      case "5":
        setSaturday(obj);
        break;
      case "6":
        setSunday(obj);
        break;
      default:
        break;
    }

    setExerciseArray([]);
    setSetsArray([]);
    setRepsArray([]);
    setRow([]);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (exerciseArray.length) {
      const obj = {
        id: Number(day),
        name: name,
        exercises: exerciseArray,
        sets: setsArray,
        reps: repsArray,
        rows: row,
      };
      createObject(obj);
    } else {
      const obj = {
        id: Number(day),
        name: name,
      };
      createObject(obj);
    }
  };

  const handleFinish = async () => {
    const plan = [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    ];

    await addDoc(collection(db, "plans"), { plan, uid: user.uid });
  };

  // errors handling for name and day
  useEffect(() => {
    if (name !== "") {
      setError(null);
    } else {
      setError("the field cannot be empty");
      return;
    }
    if (day !== "") {
      setError(null);
    } else {
      setError("the field cannot be empty");
      return;
    }
  }, [name, day]);

  // error handling for exercise
  useEffect(() => {
    if (exercise === "") {
      setExerciseError("exercise input is null");
    } else {
      setExerciseError(null);
    }
  }, [exercise]);

  return (
    <div className="create">
      {!error && exerciseArray.length > 0 && (
        <>
          <PlanDayView
            item={{
              id: Number(day),
              name: name,
              exercises: exerciseArray,
              sets: setsArray,
              reps: repsArray,
              rows: row,
            }}
            preview={true}
          />
        </>
      )}

      <form onSubmit={handleCreate} className="form-create">
        <Select
          options={days}
          placeholder="Day of the week"
          onChange={(choice) => setDay(choice.value)}
          isSearchable={false}
        />
        <Creatable
          isClearable
          options={names}
          placeholder="Name"
          onChange={(choice) => {
            choice ? setName(choice.label) : setName("");
          }}
        />
        {error && (
          <button disabled className="btn disabled">
            Fill in all fields
          </button>
        )}
        {!error && (
          <button className="btn">{`Confirm for ${week[day]}`}</button>
        )}
      </form>

      <form onSubmit={handleAdd} className="form-create">
        <label>
          <input
            type="text"
            placeholder="exercise"
            onChange={(e) => setExercise(e.target.value)}
            value={exercise}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="sets"
            onChange={(e) => setSets(e.target.value)}
            value={sets}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="reps"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
          />
        </label>
        {!exerciseError && !error && (
          <button className="btn">Add single exercise</button>
        )}
        {(exerciseError || error) && (
          <button disabled className="btn disabled">
            Add single exercise
          </button>
        )}
      </form>

      <div className="create-planView">
        {monday && <PlanDayView item={monday} />}
        {tuesday && <PlanDayView item={tuesday} />}
        {wednesday && <PlanDayView item={wednesday} />}
        {thursday && <PlanDayView item={thursday} />}
        {friday && <PlanDayView item={friday} />}
        {saturday && <PlanDayView item={saturday} />}
        {sunday && <PlanDayView item={sunday} />}
      </div>

      <div className="dark-bg">
        <button className="btn" onClick={handleFinish}>
          Create your plan!
        </button>
      </div>
    </div>
  );
};

export default Create;
