'use client';

import {useLocalStorage} from '@/hooks/useLocalStorage';

const ManageLocalStorage = () => {
  const {value, setValue, remove } = useLocalStorage('AuthType', 'Admin');

  const handleSet = () => setValue('Student');
  const handleRemove = () => remove();

  return (
    <div>
      <h2 style = {{margin: "4px 4px"}}>Auth Type: {value}</h2>
      <button style = {{border: "2px solid black", margin: "4px 4px"}} onClick={handleSet}>Set AuthType</button>
      <button style = {{border: "2px solid black"}} onClick={handleRemove}>Remove AuthType</button>
    </div>
  );
}
export default ManageLocalStorage;