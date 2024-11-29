import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';

const Login: React.FC = () => {
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handleLogin = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setPassword('');
			setEmail('');
			setLoading(false);
		}
	};
	const navigate = useNavigate();

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-blue-200'>
			<div className='flex gap-96 justify-center items-center'>
				<div className='flex flex-col gap-10'>
					<h1 className='font-bold text-5xl text-blue-600'>
						Welcome to our app
					</h1>
					<button
						onClick={() => navigate('/')}
						className='font-bold text-xl underline text-start text-blue-600 cursor-pointer'>
						Return to the Register
					</button>
					<form onSubmit={handleLogin}>
						<div className='flex flex-col gap-6'>
							<input
								type='email'
								placeholder='Enter email...'
								className='px-32 py-2 rounded-md outline-none'
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setEmail(e.target.value)
								}
							/>
							<input
								type='password'
								placeholder='Enter password'
								className='px-32 py-2 rounded-md outline-none'
								value={password}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setPassword(e.target.value);
								}}
							/>
							<button
								disabled={loading}
								className='px-36 py-2 bg-blue-600 text-white font-bold rounded-md'>
								{loading ? 'Loading...' : 'Sign In'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
