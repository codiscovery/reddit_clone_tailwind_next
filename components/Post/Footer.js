import Link from "next/link";
import { AnnotationIcon as CommentIcon } from "@heroicons/react/outline";
import ElapsedTime from "./ElapsedTime";

function Footer({ author, date, totalComments }) {
  return (
    <div className="grid grid-cols-4 gap-4 pt-4 text-sm">
      <div className="col-span-4 flex items-center md:col-span-2">
        <img
          className="rounded-full w-12 h-12 object-cover mr-2"
          src={author.img}
          alt={author.name}
        />
        Posté par{" "}
        <Link href={author.url}>
          <a className="text-blue-500 pl-1">{author.name}</a>
        </Link>
      </div>
      <div className="grow grid-flow items-center hidden md:flex">
        <ElapsedTime date={date} />
      </div>
      <div className="items-center justify-end hidden md:flex">
        <CommentIcon className="h-5 w-5 pr-1" />
        {totalComments}
      </div>
    </div>
  );
}

export default Footer;
