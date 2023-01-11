import React, { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import createTask from "../pages/api/tasks";

const AddTask: React.FC<any> = (props) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("HEALTH");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch(`/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        type: type,
      }),
    });

    setName("");
  };

  return (
    <>
      <input onChange={handleChange} value={name} />
      <select name="type" onChange={handleTypeChange} value={type}>
        <option value="HEALTH">Health</option>
        <option value="HYGIENE">Hygiene</option>
      </select>
      <button onClick={handleClick}>Add Task</button>
    </>
  );
};

export default AddTask;
