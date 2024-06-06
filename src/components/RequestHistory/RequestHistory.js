import React from 'react';
import styles from './RequestHistory.module.css';

function RequestHistory() {
  // Данные для примера
  const requestData = [
    { id: 1, contractNumber: ' 123', date: '2024-06-01', status: 'Выполнено' },
    { id: 2, contractNumber: '456', date: '2024-06-02', status: 'В процессе' }
  ];

  return (
    <div className={styles.requestHistory}>
      <h2 className={styles.title}>История заявок</h2>
      <ul className={styles.list}>
        {requestData.map(request => (
          <li key={request.id} className={styles.item}>
            <span>Номер договора:  {request.contractNumber}</span>
            <span>Дата: {request.date}</span>
            <span>Статус: {request.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestHistory;
