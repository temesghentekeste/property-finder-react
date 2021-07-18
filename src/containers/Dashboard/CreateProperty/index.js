import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewProperty } from '../../../redux/dashboardSlice';
import CreatePropertyForm from '../../../components/DashboardComp/CreatePropertyForm';

const CreateProperty = () => {
  const dispatch = useDispatch();

  const {
    created,
    loading,
    error,
    property: createdPropery,
  } = useSelector((state) => state.userdashboard);

  const handleSubmit = (event, property) => {
    event.preventDefault();
    dispatch(createNewProperty(property));
  };

  console.log(loading, error, created, createdPropery, 'New one');

  return (
    <div>
      <CreatePropertyForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProperty;
