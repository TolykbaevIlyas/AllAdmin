import { useState, FormEvent } from 'react';
import axios from 'axios';

const Authorization: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://all-admin-back.vercel.app/api/login', {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Credentials": 'true',
          "Access-Control-Allow-Origin": '*',
          "Access-Control-Allow-Methods": 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          "Access-Control-Allow-Headers": 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        }
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
