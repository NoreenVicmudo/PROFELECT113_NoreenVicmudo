import React, { useState } from "react";
function MapSample() {
  //const students = ["Anna", "Bob", "Charlie", "David"];

  const [students, setStudents] = useState([
    { id: 1, name: "Anna" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ]);

  const removeItem = (id) => {
    const newItems = students.filter((student) => student.id !== id);
    setStudents(newItems);
  };

  /*
  return (
    <div>
      <h2>Class List</h2>

      <ol>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => removeItem(student.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}*/

  return (
    <div>
      <h2>Class List</h2>
      <ol>
        {students.map((student) => (
          //<div>{student}</div>

          <li key={student.id}>
            {student.name}
            <button onClick={() => removeItem(student.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MapSample;
