"use client"

import React, { useEffect, useState } from "react";
import { ColumnDef, SortingState, flexRender, getCoreRowModel, ColumnFiltersState, getFilteredRowModel, getSortedRowModel, useReactTable, getPaginationRowModel} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}


export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData,TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])


    // Metodos de la libreria
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters
        }
    })

    // Validamos en caso de render no ejecute errores
    if(!isMounted) {
        return null
    }

    return (
        <div className="p-4 bg-background shadow-md rounded-lg mt-4">
            {/* Filtros parabuscar por ciudad */}
            <div className="flex items-center mb-2">
                <Input
                    placeholder="Buscar ciudad de Salida..."
                    value={(table.getColumn("ciudadSalida")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("ciudadSalida")?.setFilterValue(event.target.value)}
                />
            </div>
            <div className="flex items-center mb-2">
                <Input
                    placeholder="Buscar ciudad de Destino..."
                    value={(table.getColumn("ciudadDestino")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("ciudadDestino")?.setFilterValue(event.target.value)}
                />
            </div>
            
            {/* Table component */}
            <div className="rounded-md border">
                <Table>
                    {/* Table Header */}
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    {/* Table Body */}
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No hay resultados
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}