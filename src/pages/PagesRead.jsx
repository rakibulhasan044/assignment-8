// import { useLoaderData } from 'react-router';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { getItemFromRead } from '../utils';
// import { useEffect, useState } from 'react';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const PagesRead = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const books = useLoaderData();

//   useEffect(() => {
//     const storedReadBooksId = getItemFromRead();
//     if (books.length > 0) {
//       const readBooksData = books
//         .filter((book) => storedReadBooksId.includes(book.bookId))
//         .map((book) => ({
//           name: book.bookName,
//           uv: book.totalPages,
//         }));
//       setData(readBooksData);
//     }
//   }, [books]);

//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="uv" fill="#8884d8" shape={<PagesRead />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getItemFromRead } from '../utils';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesRead = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const App = () => {
  const [data, setData] = useState([]);
  const [hoveredBar, setHoveredBar] = useState(null);
  const books = useLoaderData();

  useEffect(() => {
    const storedReadBooksId = getItemFromRead();
    if (books.length > 0) {
      const readBooksData = books
        .filter((book) => storedReadBooksId.includes(book.bookId))
        .map((book, index) => ({
          name: book.bookName,
          uv: book.totalPages,
        }));
      setData(readBooksData);
    }
  }, [books]);

  const handleBarMouseEnter = (data, index) => {
    setHoveredBar(data);
  };

  const handleBarMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip hoveredBar={hoveredBar} />} />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={<PagesRead />}
        label={{ position: 'top' }}
        onMouseEnter={handleBarMouseEnter}
        onMouseLeave={handleBarMouseLeave}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
};

const CustomTooltip = ({ hoveredBar }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '5px', border: '1px solid black' }}>
      {hoveredBar && <p>{hoveredBar.name}</p>}
    </div>
  );
};

export default App;

