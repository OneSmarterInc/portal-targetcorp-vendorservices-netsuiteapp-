import React, { useMemo, useState } from 'react';
import { Box, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Button, VStack, HStack, Image } from '@chakra-ui/react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import Navbar from '../components/Navbar';
import inventory from './Payments.json';
import Footer from '../components/Footer';

const Payments = () => {
  const data = useMemo(() => inventory, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Payout ID',
        accessor: 'Payout ID',
      },
      {
        Header: 'Our PO#',
        accessor: 'Our PO#',
      },
      {
        Header: 'Customer Invoice #',
        accessor: 'Customer Invoice #',
      },
      {
        Header: 'Amount',
        accessor: 'Amount',
      },
      ,
      {
        Header: 'Currency',
        accessor: 'Currency',
      },
      
      {
        Header: 'Date',
        accessor: 'Date',
      },
      {
        Header: 'Destination',
        accessor: 'Destination',
      },
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
        <Heading mb="20px">Payouts</Heading>
        <Input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search Payouts..."
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
      <Footer/>
    </>
  );
};

export default Payments;
