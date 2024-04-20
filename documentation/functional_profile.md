# Functional profile
Functional analysis of the system to be evaluated.

## Modules
The website has mainly this logical modules: 

* Company.
* User.
* Customer.
* Item.
* Estimate.
* Invoice.
* Payment.
* Expense.
* Setting.

## Features
The website has a series of functionalities. The priority level refers to the priority that the functionality has to be tested, and the importance level refers to the importance of the functionality within the system and context of use.

### Login | High Priority - High Importance
Credential authentication to enter the system and maintain an open session.


### Logout | High Priority - High Importance
Logout to disconnect the user from the system.


### Dashboard | High Priority - High Importance
It is powered by several modules to display relevant information, including a graph to have a visual understanding of the changes related to sales, receipts, expenses, net income in a given time range. It also has many redirections to the elements involved (customers, invoice, estimates).

The relevant information displayed in the dashboard is:

- Amount due: it is the sum of the amounts pending to be paid for invoices that are overdue (payment date has already passed and payment has not been completed)

- Sales: these are the sum of the invoices (even if they are in draft). They are the company's sales, which have not necessarily been paid for by customers.

- Receipts: these are the income (that comes from payments)

- Expenses: self explanatory.

- Net income: it is the subtraction between receipts and expenses.


### Search bar | Low Priority - Low Importance
It allows you to search for customers and users using various of their data such as name, email or phone.


### Add new company | Low Priority - High Importance
A new company is created with some essential data such as the name, logo, country and currency it manages.

* **Note:** This functionality can possibly only be performed by a Super Administrator user


### Switch company | Low Priority - Medium Importance
Allows a user to switch between the companies they belong to.


### Add new customer | High Priority - High Importance
A customer is created with basic information, billing address and shipping address, it is also indicated if the customer can sign in to the Customer Portal.


### Delete customer | High Priority - High Importance
The customer is deleted from the system. If it is deleted, the invoices, budgets, payments, expenses associated with the client will also be deleted.


### Edit customer | Medium Priority - High Importance
User information is edited, such as basic information, access to the Customer Portal, billing address and shipping address.


### Customers list | Medium Priority - High Importance
A list of customers is displayed, showing their name, display name, phone, amount due and date it was created.


### Customers list filter | Low Priority - Medium Importance
Allows you to filter the list according to display name, contact name or Phone fields.


### Customers list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Add new item | High Priority - High Importance
An item is created with the information of its name, unit, price and description.


### Delete item | High Priority - High Importance
The item is deleted from the system, but if the item is in use it cannot be deleted


### Edit item | Low Priority - High Importance
The information of an item is edited such as its name, unit, price and description


### Item list | Low Priority - High Importance
A list of the items is displayed, showing their name, unit, price and date they were created.


### Item list filter | Low Priority - Medium Importance
Allows you to filter the list according to the fields name, unit, price.


### Item list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Add new estimate | High Priority - High Importance
An estimate is created with information such as customer, estimate date, expiration date, estimate number (assigned by default but can be edited), set of items indicating quantity and price (assigned by default but can be edited), item note. estimate, discount and tax.


### Delete estimate | High Priority - High Importance
The estimate is removed from the system.


### Edit estimate | Low Priority - High Importance
The information of an estimate is edited such as the customer, estimate date, expiration date, estimate number (assigned by default but can be edited), set of items indicating quantity and price (assigned by default but can be edited), note of the estimate, discount and tax.


### Estimate list | Low Priority - High Importance
A list of the estimates is displayed, showing their date (Expiry Date), number (estimate code), customer, status, total (estimate amount).


### Estimate list filter | Low Priority - Medium Importance
Allows you to filter the list according to the fields estimate number (estimate code), customer, status and a date range


### Estimate list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Change estimate status to sent/accepted/rejected | Medium Priority - High Importance 
Self explanatory.


### Convert to invoice | Medium Priority - High Importance
Take the information from a estimate and create an invoice with this information.


### Add new invoice | High Priority - High Importance
An invoice is created with information such as customer, estimate date, expiration date, invoice number (assigned by default but can be edited), set of items indicating quantity and price (assigned by default but can be edited), item note. estimate, discount and tax.


### Delete invoice | High Priority - High Importance
The invoice is deleted from the system.


### Edit invoice | Low Priority - High Importance 
The information of an invoice is edited such as the customer, estimate date, expiration date, invoice number (assigned by default but can be edited), set of items indicating quantity and price (assigned by default but can be edited), note of the estimate, discount and tax.


### Invoice list | Low Priority - High Importance
A list of invoices is displayed, showing their date (Expiry Date), number (invoice code), customer, status, amount due, total (estimate amount).


### Invoice list filter | Low Priority - Medium Importance 
Allows you to filter the list according to the fields invoice number (invoice code), customer, status and a date range.


### Invoice list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Change the status of the invoice to sent | Medium Priority - High Importance 
Self explanatory.


### Clone invoice | Medium Priority - High Importance 
Create a new invoice based on the same information as the selected invoice.


### Add new payment | High Priority - High Importance 
Creates a payment with information such as date (of the payment), payment number (it is assigned automatically but can be edited), customer, invoice, amount, payment mode, and a note.


### Delete  payment | High Priority - High Importance
The payment is eliminated (this change is reflected in the calculations of debts and profits).


### Edit payments | Low Priority - High Importance 
The payment information is edited such as date (of the payment), payment number (it is assigned automatically but can be edited), customer, invoice, amount, payment mode, and note.


### Payments list | Low Priority - Medium Importance 
A list of payments is displayed, showing their date, payment number (payment code), invoice number, amount.


#### Payment list filter | Low Priority - Medium Importance 
Allows you to filter the list according to the customer, payment number or payment mode fields.

### Payments list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Add new expense | High Priority - High Importance
An expense is created with information such as category, date, amount, currency, customer, payment mode, a note.

### Delete expense | High Priority - High Importance
System expense is eliminated.


#### Edit expense | Low Priority - High Importance 
The expense information is edited such as category, date, amount, currency, customer, payment mode, a note.


### Expenses list | Low Priority - High Importance
A list of expenses is displayed, showing their date, category, customer, note, amount.


### Filtro del listado | Low Priority - Medium Importance 
Permite filtrar el listado segun los campos Customer, Category, y rango de fechas.

### Expense list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Add new user | High Priority - High Importance
A user is created with information such as name, email, campaigns, password, phone.


### Delete user | High Priority - High Importances
The user is removed from the system.


### Edit user | Low Priority - High Importance 
User information is edited such as name, email, campaigns, role in a company, password, phone.


#### Users list | Low Priority - High Importance 
A list of users is displayed, showing their name, email, phone, and the date they were created.


### Users list filter | Low Priority - Medium Importance
Allows you to filter the list according to the fields name, email, phone.


### User list ordering | Low Priority - Medium Importance
It allows you to sort the list according to a specific field in ascending or descending order.


### Report management | Low Priority - High Importance
Preview of reports according to date range, customer, sales, profits and losses, expenses, and taxes. The creation of the report is done by generating it as a pdf.


### Settings | Low Priority - High Importance
It contains many configurations that directly impact estimates, invoices, payments, expenses, reports, note templates. 

* Note: Such changes are high impact and due to time limitations and the need for a more exhaustive analysis to determine if it is convenient to automate tests related to this functionality, I have decided to omit it.



