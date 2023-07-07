import TableHead from "./TableHead";

export default function TableError() {
  return (
    <>
      <table className="table table-fixed w-full leading-normal">
        <TableHead />
      </table>
      <p className="text-white text-lg m-4">
        There was an error loading the data. Please try again later.
      </p>
    </>
  );
}
