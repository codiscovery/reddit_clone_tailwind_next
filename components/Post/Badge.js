function Badge({ children }) {
  return (
    <span className="bg-blue-500 px-2 py-1 text-white uppercase text-sm rounded-lg">
      {children}
    </span>
  );
}

export default Badge;
