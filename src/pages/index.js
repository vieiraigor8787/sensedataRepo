import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { StyledSection, TableHeader, TableHeaderTitle, TableBody, TableRow, TableCell } from '../styles/pages/home'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { expensesUseCases } from './../services/expenses';

export default function Home() {
  const [expenses, setExpenses] = useState([])
  const [newExpense, setNewExpense] = useState({
    title: '',
    type: '',
    category: '',
    value: 0
  })
  function handleValue(event) {
    const { name, value } = event.target

    setNewExpense(currentState => {
      return {
        ...currentState,
        [name]: value
      }
    })
  }

  async function handleNewExpense() {
    try {
      const response = await expensesUseCases.saveExpenses(newExpense)
      console.log(response)
    } catch (error) {
      console.error('erro no envio da despesa', error)
    }
  }
  // if (!products) return <CircularProgress />
  useEffect(() => {
    (async function() {
      try {
        const response = await expensesUseCases.getExpenses()
        setExpenses(response)
      } catch (error) {
        console.error('erro no carregamento das despesas', error)
      }
    })()
  }, [])

  return (
      <StyledSection>
        <TableHeader>
          <TableHeaderTitle>Titulo</TableHeaderTitle>
          <TableHeaderTitle>Tipo</TableHeaderTitle>
          <TableHeaderTitle>Categoria</TableHeaderTitle>
          <TableHeaderTitle>Valor</TableHeaderTitle>
          <TableHeaderTitle>Ações</TableHeaderTitle>
        </TableHeader>
        <TableBody>
          {expenses.length && expenses.map(expense => {
            return (
          <TableRow key={expense.id}>
            <TableCell>
              <input value={expense.title} />
            </TableCell>
            <TableCell>
            <input value={expense.type} />
            </TableCell>
            <TableCell>
            <input value={expense.category}/>
            </TableCell>
            <TableCell>
            <input value={expense.value}/>
            </TableCell>
            <TableCell>
              <AddIcon alt="adicionar" />
              <EditIcon alt="editar" />
              <DeleteIcon alt="deletar" />
            </TableCell>
          </TableRow>

            )
          })}
          <TableRow>
            <TableCell>
              <input onChange={handleValue} name="title" value={newExpense.title} />
            </TableCell>
            <TableCell>
            <input onChange={handleValue} name="type" value={newExpense.type} />
            </TableCell>
            <TableCell>
            <input onChange={handleValue} name="category" value={newExpense.category}/>
            </TableCell>
            <TableCell>
            <input onChange={handleValue} name="value" value={newExpense.value}/>
            </TableCell>
            <TableCell>
              <AddIcon alt="adicionar" onClick={handleNewExpense} />
              <EditIcon alt="editar" />
              <DeleteIcon alt="deletar" />
            </TableCell>
          </TableRow>
        </TableBody>
      </StyledSection>
  )
}

Home.propTypes = {
  products: PropTypes.array
}
