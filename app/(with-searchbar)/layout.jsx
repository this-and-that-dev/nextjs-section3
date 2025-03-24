import SearchBar from "@/components/Searchbar";

export default function Layout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
