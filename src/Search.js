import { SearchInput } from "evergreen-ui";

export default function Search({ query, onChange }) {
  console.log(query);
  return (
    <SearchInput
      placeholder="Enter search Item"
      width="100%"
      autoFocus
      value={query}
      onChange={onChange}
    />
  );
}
