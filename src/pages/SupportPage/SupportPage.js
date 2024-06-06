import React from 'react';
import RequestForm from '../../components/RequestForm/RequestForm';
import RequestHistory from '../../components/RequestHistory/RequestHistory';
import styles from './SupportPage.module.css';

function SupportPage() {
  return (
    <div className={styles.supportPage}>
      <h1 className={styles.title}>Техническая поддержка</h1>
      <RequestForm />
      <RequestHistory />
    </div>
  );
}

export default SupportPage;
