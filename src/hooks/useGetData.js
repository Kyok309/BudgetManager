import { useState, useEffect } from "react";

const useGetData = () => {
  const [group, setGroup] = useState([]);
  const [budget, setBudget] = useState([]);
  const [incomeCategory, setIncomeCategory] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  useEffect(() => {

    fetch("/api/group", {
        method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            setGroup(data.group);
        }
      );

    fetch("/api/budget", {
      method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
          setBudget(data.budget);
      }
    );


    fetch("/api/category", {
      method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
          setIncomeCategory(data.incomeCategory);
          setExpenseCategory(data.expenseCategory);
      }
    );

    fetch("/api/income", {
      method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
          setIncome(data.income);
      }
    );

    fetch("/api/expense", {
      method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
          setExpense(data.expense);
      }
    );

  }, []);

  console.log("income======>", income);

  return {group, budget, incomeCategory, expenseCategory, income, expense};
};
export { useGetData };