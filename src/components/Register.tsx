import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';

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
	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setImage({
				file: selectedFile,
				url: URL.createObjectURL(selectedFile),
			});
		}
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(response);
			await setDoc(doc(db, 'users', response.user.uid), {
				username,
				email,
				id: response.user.uid,
				blocked: [],
			});
			await setDoc(doc(db, 'chat', response.user.uid), {
				chat: [],
			});
			handleSuccess();
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setPassword('');
			setEmail('');
			setUsername('');
			setImage({ file: null, url: '' });
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
						<button className='px-36 py-2 bg-blue-600 text-white font-bold rounded-md'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
