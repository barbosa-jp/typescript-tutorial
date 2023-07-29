import { ListTemplate } from "./classes/ListTemplates.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'web work', 150);

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 150);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format)
})

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs 
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//List template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc: HasFormatter;
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})