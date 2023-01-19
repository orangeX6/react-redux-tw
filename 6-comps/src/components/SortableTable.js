import { useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
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
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // # update table heads
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)} {column.label}
          </div>
        </th>
      ),
    };
  });

  // # Sort Data
  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the data prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
