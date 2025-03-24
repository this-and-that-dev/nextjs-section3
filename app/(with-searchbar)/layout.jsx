import SearchBar from "@/components/search-bar";

export default function Layout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
