import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewProperty, getUserDashboard } from '../../../redux/dashboardSlice';
import CreatePropertyForm from '../../../components/DashboardComp/CreatePropertyForm';

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

  console.log(loading, error, created, createdPropery, 'New one');

  return (
    <div>
      <CreatePropertyForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProperty;
