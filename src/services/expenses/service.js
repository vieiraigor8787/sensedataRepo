import initAxiosInstance from '../axios'

const axios = initAxiosInstance('frontend')

export const ExpensesService = {
  getExpenses(filter) {
    return axios
      .get('/api/expenses', { params: { filter } })
      .then(response => response.data)
  },

  saveExpenses(data) {
    return axios
      .post('/api/newExpense', { data })
      .then(response => response.data)
  }
}
