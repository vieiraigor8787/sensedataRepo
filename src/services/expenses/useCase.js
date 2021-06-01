export default class ExpensesUseCases {
  constructor({ ExpensesService }) {
    this.expensesService = ExpensesService
  }

  async getExpenses(filter) {
    return await this.expensesService.getExpenses(filter)
  }

  async saveExpenses(data) {
    return await this.expensesService.saveExpenses(data)
  }
}
