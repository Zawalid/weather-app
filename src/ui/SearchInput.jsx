export default function SearchInput() {
  return (
    <form className="pr-3 flex-1">
      <input
        type="text"
        className="bg-background-secondary text-text-primary  text-sm rounded-xl p-2 pl-3 focus:outline-none w-full"
        placeholder="Search for cities" />
    </form>
  );
}
