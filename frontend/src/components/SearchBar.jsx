import React from "react";

import { useState } from "react";

export default function SearchBar(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(event) => setStudent(event.target.value)}
      />
      {console.log("NAME", student)}
    </div>
  );
}
