import React, { useEffect, useState } from 'react';
import Axios from 'axios';

interface Props {
  match: any;
}

const ExpenseDetail: React.FC<Props> = ({ match }) => {
  const [response, setResponse] = useState({ label: '', file: '' });
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchExpense = async (id: string) => {
      try {
        const payload = await Axios.get(
          `http://localhost:8050/api/v1/expenses/${id}`
        );
        setResponse(payload.data.expense);
      } catch (err) {
        setError(err.response.data.error);
      }
    };
    if (match) {
      fetchExpense(match.params.id);
    }
  }, []);

  return (
    <div>
      {response && Object.keys(response).length > 0 && (
        <>
          <span>{response.label}</span>
          {response.file && (
            <img src={`http://localhost:8050${response.file}`} />
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseDetail;
