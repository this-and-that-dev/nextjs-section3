import Searchbar from "@/app/(with-searchbar)/Searchbar";

export default function Layout({ children }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
