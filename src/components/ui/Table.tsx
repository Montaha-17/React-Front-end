type TableProps = {
  columns: string[];
  data: Record<string, string>[];
  striped?: boolean;
};

function Table({ columns, data, striped }: TableProps) {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-primary text-white">
        <tr>
            {columns.map((column) => (
      <th key={column} className="p-4 text-left">{column}</th>
    ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
            <tr key={index} className={striped && index % 2 === 0 ? "bg-secondary" : ""}>
            {columns.map((column) => (
                <td key={column} className="p-4 border-b border-gray-200">{row[column]}</td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
  );
}

export default Table;