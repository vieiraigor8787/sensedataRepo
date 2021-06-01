import { ExpensesService } from './service'
import ExpensesUseCases from './useCase'

export const expensesUseCases = new ExpensesUseCases({
  ExpensesService
})
