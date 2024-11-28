import image from '../images//man-with-beard-avatar-character-isolated-icon-free-vector.jpg';

const NewUser: React.FC = () => {
	return (
		<div className='w-max h-max px-20 py-10 bg-blue-200 rounded-md absolute top-48 left-0 right-0 bottom-0 mx-auto'>
			<form action='' className='flex gap-4'>
				<input
					type='text'
					placeholder='Enter username'
					className='rounded-md px-8 py-2'
				/>
				<button className='px-8 py-2 bg-blue-500 text-white rounded-md font-semibold'>
					Search
				</button>
			</form>
			<div className='flex flex-col gap-4'>
				<div className='flex items-center gap-4 mt-4'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-[50%] object-cover'
					/>
					<span>Fullname</span>
				</div>
				<button className='px-10 py-2 bg-blue-500 rounded-md text-white font-bold cursor-pointer'>
					Add user
				</button>
			</div>
		</div>
	);
};

export default NewUser;
