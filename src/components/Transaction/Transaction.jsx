import propTypes from "prop-types";

const Transaction = ({ transaction: { id, type, amount, currency } }) => {
   return (
      <tr>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
      </tr>
   )
}

export const Transactions = ({transactionData}) => {
   return (
      <table className="transaction-history">
      <thead>
         <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
         </tr>
      </thead>
      <tbody>
            {transactionData.map((transaction) => {
               return (
                  <Transaction key={transaction.id} transaction={transaction} />
               )
            })}
      </tbody>
      </table>
   )
}

Transaction.propTypes = {
   type: propTypes.string.isRequired,
   id: propTypes.string.isRequired,
   amount: propTypes.string.isRequired,
   currency: propTypes.string.isRequired
}.isRequired