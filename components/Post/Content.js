function Content({ type, data }) {
  const isText = type === "text";

  return (
    <div>
      {isText && <p className="">{data}</p>}
      {!isText && <img className="w-full" src={data} alt="Image" />}
    </div>
  );
}

export default Content;
