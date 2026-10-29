import { Invoice } from './invoiceType';

import InvoiceTable from './InvoiceTable';

const invoices: Invoice[] = [{
                    id: 1,
                    amount: 125039,
                    status: 'pending',
                    issueDate: '2026-10-07',
                    dueDate: '2026-11-05',
                    customer: {
                    id: 1,
                    name: 'Construtora Meridiano',
                    email: 'contato@meridiano.com.br',
                },
            },
        {
                    id: 2,
                    amount: 15340,
                    status: 'paid',
                    issueDate: '2026-09-03',
                    dueDate: '2026-10-05',
                    customer: {
                    id: 2,
                    name: 'Gráfica Nova',
                    email: 'nova@grafica.com.br',
                },
            },
        {
                    id: 3,
                    amount: 4504899,
                    status: 'paid',
                    issueDate: '2026-09-01',
                    dueDate: '2026-10-01',
                    customer: {
                    id: 3,
                    name: 'Todos por Um',
                    email: 'comercial@todosporum.com',
                },
            },
        ];
export default function App() {
    return <>
        <h1>Faturas</h1>

        <InvoiceTable datas ={invoices} />
    </>;
}