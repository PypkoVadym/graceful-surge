
import React from 'react';
import { Check } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

export interface ServicePrice {
  procedure: string;
  price: string;
}

interface ServiceTableProps {
  prices: ServicePrice[];
}

const ServiceTable = ({ prices }: ServiceTableProps) => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-semibold text-foreground w-2/3">Процедура</TableHead>
            <TableHead className="text-right font-semibold text-foreground">Вартість</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prices.map((price, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
              <TableCell className="font-medium flex items-center gap-2">
                <Check size={16} className="text-primary shrink-0" />
                {price.procedure}
              </TableCell>
              <TableCell className="text-right font-semibold">{price.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceTable;
