import React from "react";

import { useState } from "react";

export default function SearchBar(props) {
  const [origin, setOrigin] = useState(props.origin || "");

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Where are you departing from?"
        value={origin}
        onChange={(event) => setOrigin(event.target.value)}
      />
      {console.log("DEPARTING CITY", origin)}
    </div>
  );
}
