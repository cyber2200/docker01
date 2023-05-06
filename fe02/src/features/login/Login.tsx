import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  login,
  setFormData,
  formData,
  loadingState,
  setLoadingState
} from './loginSlice';
import { setCookie } from '../../lib/utils';

export function Login() {
  const formDataVals = useAppSelector(formData);
  const loadingStateVal = useAppSelector(loadingState);
  const dispatch = useAppDispatch();

  const formHanlder = async (e: any) => {
    e.preventDefault();
    dispatch(setLoadingState('Loading...'))
    const r = await dispatch(login(formDataVals));
    const t = r as {payload: { msg: string; res: string; session_id: string; }}
    if (t.payload.res === 'OK') {
      setCookie('session_id', t.payload.session_id, 365*3);
      window.location.href = '/main';
    } else {
      dispatch(setLoadingState(t.payload.msg))
    }
  };

  const onEmailInpChange = (e: any) => {
    dispatch(setFormData({email: e.target.value, password: formDataVals.password}));
  };

  const onPasswordInpChange = (e: any) => {
    dispatch(setFormData({email: formDataVals.email, password: e.target.value}));
  };

  return (
    <div>
      {loadingStateVal}
      <form onSubmit={formHanlder}>
        Email:<br />
        <input type="text" onChange={onEmailInpChange} /><br />
        Password:<br />
        <input type="text" onChange={onPasswordInpChange}  /><br />
        <input type="submit" />
      </form>
    </div>
  );
}
