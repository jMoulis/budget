import axios from 'axios';

const BACKEND_API_URL = 'http://192.168.1.18:8050'; // process.env.REACT_APP_DOMAIN;

const expensesApi = axios.create({
  baseURL: `${BACKEND_API_URL}/api/v1/expenses`,
});
const budgetsApi = axios.create({
  baseURL: `${BACKEND_API_URL}/api/v1/budgets`,
});
const incomesApi = axios.create({
  baseURL: `${BACKEND_API_URL}/api/v1/incomes`,
});

export default {
  fetchBudgets(query?: string) {
    return budgetsApi.get('');
  },
  fetchExpenses() {
    return expensesApi.get('');
  },
  fetchOneExpense(id: string) {
    return expensesApi.get(`/${id}`);
  },
  createNewExpense(formData: any) {
    return expensesApi.post('', formData);
  },
  editOneExpense(id: string, data: any) {
    return expensesApi.patch(`/${id}`, data);
  },
  fetchOneBudget(id: string) {
    return budgetsApi.get(`/${id}`);
  },
  createNewBudget(data: any) {
    return budgetsApi.post('', data);
  },
  editOneBudget(id: string, value: any) {
    return budgetsApi.patch(`/${id}`, value);
  },
  fetchIncomes() {
    return incomesApi.get('');
  },
  createNewIncome(data: any) {
    return incomesApi.post('', data);
  },
  editOneIncome(id: string, data: any) {
    return incomesApi.patch(`/${id}`, data);
  },
  fetchOneIncome(id: string) {
    return incomesApi.get(`/${id}`);
  },
};
