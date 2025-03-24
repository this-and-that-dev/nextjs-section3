"use client";

import { useState } from "react";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input />
      <button
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      >
        검색
      </button>
    </div>
  );
}
