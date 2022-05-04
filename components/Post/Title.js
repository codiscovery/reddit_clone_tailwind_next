import Badge from "./Badge";
function Title({ text, type }) {
  const maxTextLength = 150;
  const displayText =
    text.length >= maxTextLength
      ? `${text.substring(0, maxTextLength - 3)}...`
      : text;

  return (
    <div className="mb-4 flex flex-wrap items-center text-zinc-600 w-72 pb-2 md:w-auto">
      <span className="text-3xl font-bold pr-2 text-ellipsis truncate">
        {displayText}
      </span>
      <span className="">
        <Badge>{type}</Badge>
      </span>
    </div>
  );
}

export default Title;
