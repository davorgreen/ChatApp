import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import upload from '../firebase/upload';

type ImageState = {
	file: File | null;
	url: string;
};

const Register = () => {
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [image, setImage] = useState<ImageState>({
		file: null,
		url: '',
	});
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);

	const handleSuccess = () => {
		toast.success(
			'Account successfully created! You can now log in!',
			{
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
				transition: Bounce,
			}
		);
	};
	const handleImage = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setImage({
				file: selectedFile,
				url: URL.createObjectURL(selectedFile),
			});
		}
	};

	const handleRegister = async (
		e: React.FormEvent
	): Promise<void> => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const img: string = await upload(image.file as File);
			console.log(response);
			await setDoc(doc(db, 'users', response.user.uid), {
				username,
				email,
				id: response.user.uid,
				image: img,
				blocked: [] as string[],
			});
			await setDoc(doc(db, 'chat', response.user.uid), {
				chat: [] as string[],
			});
			handleSuccess();
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setPassword('');
			setEmail('');
			setUsername('');
			setImage({ file: null, url: '' });
			setLoading(false);
		}
	};
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-blue-200'>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<div className=' flex-col items-center justify-center'>
				<h1 className='font-bold text-5xl text-center text-blue-600 mt-10 mb-5'>
					Create an account
				</h1>
				<button
					onClick={() => navigate('/login')}
					className='font-bold text-xl underline text-end text-blue-600 cursor-pointer'>
					I already have an acount
				</button>
				<form onSubmit={handleRegister}>
					<div className=''>
						<label className='font-semibold text-lg text-blue-600'>
							Upload Image:
						</label>
						<input
							type='file'
							className='px-32 py-2 rounded-md outline-none'
							onChange={handleImage}
						/>
						{image.url ? (
							<img
								src={image.url}
								alt='Uploaded'
								className='flex items-center justify-center rounded-[50%] w-28 h-28 object-cover mb-5 mt-5 '
							/>
						) : (
							<img
								src=''
								alt=''
								className='flex items-center justify-center rounded-[50%] w-28 bg-slate-400 h-28 object-cover mb-5 mt-5 '
							/>
						)}
					</div>

					<div className='flex flex-col gap-6'>
						<input
							type='text'
							placeholder='Enter username...'
							className='px-32 py-2 rounded-md outline-none'
							value={username}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setUsername(e.target.value);
							}}
						/>
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
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setPassword(e.target.value);
							}}
						/>
						<button
							disabled={loading}
							className='px-36 py-2 bg-blue-600 text-white font-bold rounded-md'>
							{loading ? 'Loading...' : 'Sign Up'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
