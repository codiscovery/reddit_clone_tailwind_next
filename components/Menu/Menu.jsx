import {
  BellIcon,
  BookmarkIcon,
  HomeIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

import { LightningBoltIcon } from "@heroicons/react/solid";

import IconContainer from "./IconContainer";

function Menu() {
  return (
    <div
      className="bg-white text-zinc-400 w-64 px-2 flex flex-col h-screen"
      style={{
        boxShadow: "10px 0 30px #cdcdcd",
      }}
    >
      <IconContainer>
        <LightningBoltIcon className="text-indigo-600 w-10" />
      </IconContainer>
      <IconContainer className="grow flex flex-col justify-center items-center gap-4">
        <HomeIcon className="text-indigo-600 w-10" />
        <BookmarkIcon className="w-10" />
        <BellIcon className="w-10" />
      </IconContainer>
      <IconContainer>
        <LogoutIcon className="w-10" />
      </IconContainer>
    </div>
  );
}

export default Menu;
