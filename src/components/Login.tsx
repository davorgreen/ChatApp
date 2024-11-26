import { useState } from 'react';

type ImageState = {
	file: File | null; // `File` je ugrađen tip u TypeScript
	url: string;
};
const Login: React.FC = () => {
	const [image, setImage] = useState<ImageState>({
		file: null,
		url: '',
	});

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setImage({
				file: selectedFile,
				url: URL.createObjectURL(selectedFile),
			});
		}
	};
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-blue-200'>
			<div className='flex gap-96 justify-center items-center'>
				<div className='flex flex-col gap-10'>
					<h1 className='font-bold text-5xl text-blue-600'>
						Welcome to our app
					</h1>
					<form action=''>
						<div className='flex flex-col gap-6'>
							<input
								type='email'
								placeholder='Enter email...'
								className='px-32 py-2 rounded-md outline-none'
							/>
							<input
								type='password'
								placeholder='Enter password'
								className='px-32 py-2 rounded-md outline-none'
							/>
							<button className='px-36 py-2 bg-blue-600 text-white font-bold rounded-md'>
								Sign In
							</button>
						</div>
					</form>
				</div>
				<div className=' flex-col items-center justify-center'>
					<h1 className='font-bold text-5xl text-center text-blue-600 mt-10 mb-5'>
						Create an account
					</h1>
					<form action=''>
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
							/>
							<input
								type='email'
								placeholder='Enter email...'
								className='px-32 py-2 rounded-md outline-none'
							/>
							<input
								type='password'
								placeholder='Enter password'
								className='px-32 py-2 rounded-md outline-none'
							/>
							<button className='px-36 py-2 bg-blue-600 text-white font-bold rounded-md'>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
