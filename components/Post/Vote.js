import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

function Vote({ total }) {
  const colors = {
    up: "text-green-500",
    down: "text-red-600",
    neutral: "text-zinc-400",
  };

  let colorUp = colors.neutral;
  let colorDown = colors.neutral;
  let selectedColor = colors.neutral;
  if (total > 0) {
    selectedColor = colors.up;
    colorUp = colors.up;
  }
  if (total < 0) {
    selectedColor = colors.down;
    colorDown = colors.down;
  }

  const totalText = Math.abs(total);

  return (
    <div className="font-bold text-xl text-center">
      <ArrowSmUpIcon className={`h-5 w-5 ${colorUp}`} />
      <p className={`${selectedColor}`}>{totalText}</p>
      <ArrowSmDownIcon className={`h-5 w-5 ${colorDown}`} />
    </div>
  );
}

export default Vote;
