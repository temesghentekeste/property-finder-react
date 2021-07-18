import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WaveLoading } from 'react-loadingg';

import { getUserDashboard } from '../../redux/dashboardSlice';
import DashboardComp from '../../components/DashboardComp';
import CreateProperty from './CreateProperty';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userdashboard);

  useEffect(() => {
    dispatch(getUserDashboard());
  }, [dispatch]);

  if (loading || loading === null || loading === undefined) {
    return <WaveLoading />;
  }

  if (
    !user
    || user === null
    || user === undefined
    || user.data === undefined
    || user.included === undefined
  ) {
    return <WaveLoading />;
  }

  if (user && user.error) {
    return <h1>{error}</h1>;
  }

  return (
    <section>
      {user.included.length > 0 && <DashboardComp data={user.included} />}
      <CreateProperty />
    </section>
  );
};

export default Dashboard;
