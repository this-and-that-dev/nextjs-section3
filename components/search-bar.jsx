"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
