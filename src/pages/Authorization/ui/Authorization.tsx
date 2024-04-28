import { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';

const Authorization: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  useEffect(()=>{
    axios.get('https://all-admin-back.vercel.app/api').then(function (response) {
      console.log(response);
    });
  },[])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://all-admin-back.vercel.app/api/test', {
        username,
        password
      });
      console.log('Успешная авторизация', response.data);
    } catch (error) {
      setError('Неверное имя пользователя или пароль');
      console.error('Ошибка при авторизации', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя пользователя:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Войти</button>
    </form>
  );
};

export default Authorization;
