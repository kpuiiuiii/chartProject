import './ExpenseItem.css';


function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = "Paper";
    const exmenseAmount = 294.23
    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">Am