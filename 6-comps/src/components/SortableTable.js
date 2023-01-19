import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import useSort from '../hooks/use-sort';
import Table from './Table';

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <MdArrowDropUp className="pr-1 text-lg" />
        <MdArrowDropDown className="pr-1 text-lg" />
      </div>
    );
  }
  if (sortOrder === null)
    return (
      <div>
        <MdArrowDropUp className="pr-1 text-lg" />
        <MdArrowDropDown className="pr-1 text-lg" />
      </div>
    );
  else if (sortOrder === 'asc')
    return (
      <div>
        <MdArrowDropUp className="pr-1 text-lg" />
      </div>
    );
  else if (sortOrder === 'desc')
    return (
      <div>
        <MdArrowDropDown className="pr-1 text-lg" />
      </div>
    );
}

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  // # update table heads
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)} {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
