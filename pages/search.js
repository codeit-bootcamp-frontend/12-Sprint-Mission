import { useRouter } from "next/router";
import SearchForm from "@/components/ui/SearchForm";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search Page</h1>
      <SearchForm initialValue={q} />
      <h1>Search Result: {q}</h1>
    </div>
  );
}
