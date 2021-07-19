/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createNewProperty,
  getUserDashboard,
} from '../../../redux/dashboardSlice';
import CreatePropertyForm from '../../../components/DashboardComp/CreatePropertyForm';
import styles from './CreateProperty.module.css';

const CreateProperty = () => {
  const dispatch = useDispatch();

  const {
    created,
    loading,
    error,
    property: createdPropery,
  } = useSelector((state) => state.userdashboard);

  const handleSubmit = async (event, property) => {
    await event.preventDefault();
    await dispatch(createNewProperty(property));
    await dispatch(getUserDashboard());
  };

  return (
    <div className={styles.createNewPropertyContainer}>
      <CreatePropertyForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProperty;
