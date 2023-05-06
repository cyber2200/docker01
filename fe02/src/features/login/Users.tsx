import Menu from '../../components/Menu';
import { useEffect } from 'react';
import { getUsers } from './loginSlice';
import { useAppDispatch } from '../../app/hooks';

export function Users() {
  const dispatch = useAppDispatch();

  useEffect( () => {
    const a = async () => {
      console.log('useEffect');
      const r = await dispatch(getUsers());
      console.log(r)
    };
    a();
  });
  return (
    <div>
      <Menu />
      Users
    </div>
  );
}
