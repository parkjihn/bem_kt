import React from 'react';
import ContractForm from '../../components/ContractForm/ContractForm';
import styles from './ContractPage.module.css';

function ContractPage() {
  return (
    <div className={styles.contractPage}>
      <h1 className={styles.title}>Оформить договор</h1>
      <ContractForm />
    </div>
  );
}

export default ContractPage;
