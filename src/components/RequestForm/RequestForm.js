import React, { useState } from 'react';
import styles from './RequestForm.module.css';

function RequestForm() {
  const [formData, setFormData] = useState({
    contractNumber: '',
    requestNumber: '',
    date: '',
    equipment: '',
    issueDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
  };

  return (
    <form className={styles.requestForm} onSubmit={handleSubmit}>
      <input className={styles.input} name="contractNumber" placeholder="Номер договора" value={formData.contractNumber} onChange={handleChange} required />
      <input className={styles.input} name="requestNumber" placeholder="Номер заявки" value={formData.requestNumber} onChange={handleChange} required />
      <input className={styles.input} name="date" placeholder="Дата и время" value={formData.date} onChange={handleChange} required />
      <input className={styles.input} name="equipment" placeholder="Перечень оборудования" value={formData.equipment} onChange={handleChange} required />
      <textarea className={styles.textarea} name="issueDescription" placeholder="Описание неполадок" value={formData.issueDescription} onChange={handleChange} required />
      <button className={styles.button} type="submit">Отправить</button>
    </form>
  );
}

export default RequestForm;
