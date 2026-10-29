type InvoiceStatus = 'pending' | 'paid';

interface Invoice {
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: {
        id: number;
        name: string;
        email: string;
    };
}

const invoices: Invoice[] = [];

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    return invoices.find((element) => element.id === id);
}