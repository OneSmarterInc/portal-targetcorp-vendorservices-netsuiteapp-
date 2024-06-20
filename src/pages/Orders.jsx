import React, { useMemo, useState } from 'react';
import { Box, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Button, VStack, HStack, Image } from '@chakra-ui/react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import Navbar from '../components/Navbar';
import inventory from './Orders.json';
import Footer from '../components/Footer';

const Inventory = () => {
  const data = useMemo(() => inventory, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Order ID',
        accessor: 'Order ID',
      },
      {
        Header: 'Date',
        accessor: 'Date',
      },
      {
        Header: 'Window',
        accessor: 'Window',
      },
      {
        Header: ' Freight',
        accessor: 'Freight',
      },
      {
        Header: ' Status',
        accessor: 'Status',
      },
      {
        Header: ' Total',
        accessor: 'Total',
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <>
      <Navbar />
      <Box p="10px">
        <Heading mb="20px">Orders</Heading>
        <Input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search Orders..."
          mb="20px"
        />
        <Table {...getTableProps()} variant="striped" colorScheme="">
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <Footer />
    </>
  );
};

export default Inventory;
