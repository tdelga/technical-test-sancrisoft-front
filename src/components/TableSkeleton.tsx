import { headTitles } from "../constants/headTitles";
import TableHead from "./TableHead";

export default function TableSkeleton() {
  return (
    <table className="table table-auto w-full leading-normal">
      <TableHead />
      <tbody className="flex-1 text-gray-700 sm:flex-none">
        {Array(10)
          .fill(0)
          .map((item) => (
            <tr className="border-b md:border-gray-800 flex p-1 md:p-3 md:table-row flex-col border border-white md:border-0 w-full flex-wrap my-2">
              <td></td>
              {headTitles.map(() => (
                <td className="p-1 md:p-3">
                  <div className=" animate-pulse bg-gray-400 w-full h-4 rounded-xl"></div>
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
