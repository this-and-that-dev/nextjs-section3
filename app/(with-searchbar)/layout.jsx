import SearchBar from "@/components/search-bar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
