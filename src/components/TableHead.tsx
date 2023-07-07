import { HeadTitle, headTitles } from "../constants/headTitles";

export default function TableHead() {
  return (
    <thead className="uppercase text-white text-xs font-semibold bg-test-dark-blue">
      <tr className="hidden md:table-row border-b-2 border-gray-800">
        <th className="text-left p-3"></th>
        {headTitles.map((title: HeadTitle) => (
          <th className="text-left p-3">
            <p>{title.label}</p>
          </th>
        ))}
        <th className="text-left p-3"></th>
      </tr>
    </thead>
  );
}
