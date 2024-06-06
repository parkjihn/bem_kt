import React, { useState } from 'react';
import styles from './ContractForm.module.css';

function ContractForm() {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationShortName: '',
    activityField: '',
    legalAddress: '',
    physicalAddress: '',
    representativeName: '',
    representativePosition: '',
    representativePhone: '',
    representativeEmail: '',
    INN: '',
    OKPO: '',
    BIK: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
  };

  return (
    <form className={styles.contractForm} onSubmit={handleSubmit}>
      <input className={styles.input} name="organizationName" placeholder="Полное название организации" value={formData.organizationName} onChange={handleChange} required />
      <input className={styles.input} name="organizationShortName" placeholder="Сокращённое название организации" value={formData.organizationShortName} onChange={handleChange} required />
      <input className={styles.input} name="activityField" placeholder="Сфера деятельности" value={formData.activityField} onChange={handleChange} required />
      <input className={styles.input} name="legalAddress" placeholder="Юридический адрес" value={formData.legalAddress} onChange={handleChange} required />
      <input className={styles.input} name="physicalAddress" placeholder="Физический адрес" value={formData.physicalAddress} onChange={handleChange} required />
      <input className={styles.input} name="representativeName" placeholder="ФИО представителя" value={formData.representativeName} onChange={handleChange} required />
      <input className={styles.input} name="representativePosition" placeholder="Должность представителя" value={formData.representativePosition} onChange={handleChange} required />
      <input className={styles.input} name="representativePhone" placeholder="Телефон представителя" value={formData.representativePhone} onChange={handleChange} required />
      <input className={styles.input} name="representativeEmail" placeholder="Email представителя" value={formData.representativeEmail} onChange={handleChange} required />
      <input className={styles.input} name="INN" placeholder="ИНН" value={formData.INN} onChange={handleChange} required />
      <input className={styles.input} name="OKPO" placeholder="ОКПО" value={formData.OKPO} onChange={handleChange} required />
      <input className={styles.input} name="BIK" placeholder="БИК" value={formData.BIK} onChange={handleChange} required />
      <button className={styles.button} type="submit">Отправить</button>
    </form>
  );
}

export default ContractForm;
