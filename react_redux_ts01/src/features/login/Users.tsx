import Menu from '../../components/Menu';
import { useEffect, useState } from 'react';
import { getUsers, usersState } from './loginSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';

export function Users() {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(usersState);

  useEffect( () => {
    const a = async () => {
      // console.log('useEffect');
      const r = await dispatch(getUsers());
      // const t = r as {payload: { data: {users_data: []} } };
      // setUsersData(t.payload.data.users_data);
    };
    a();
  }, []);
  
  const deleteItem = (id: number) => {
    console.log('deleteItem ' + id);
  };

  const usersItems: any = [];
  usersData.map((item: any) => {
    usersItems.push(<div key={item.id}>
      <div>
        Email: {item.email}
      </div>
      <div>
        <Link to="#" onClick={(e) => deleteItem(item.id)}>Delete</Link>
      </div>
    </div>)
  });

  return (
    <div>
      <Menu />
      Users<br />
      {usersItems}
    </div>
  );
}
