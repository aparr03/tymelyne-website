import { signUpUser } from '../services/userService';

// Inside your handleSubmit function
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  try {
    const user = await signUpUser(data.get('email'), data.get('password'));
    console.log('User signed up:', user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};