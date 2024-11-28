//images
import image from '../images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg';
//icons
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Detail: React.FC = () => {
	return (
		<div className=' flex flex-col'>
			<div className='flex flex-col justify-between items-center'>
				<img
					src={image}
					alt=''
					className='w-36 h-36 rounded-xl object-cover'
				/>
			</div>
			<div className='flex flex-col gap-10'>
				<div className='flex flex-col items-center gap-4 mt-4'>
					<h2>Fullname</h2>
					<p>Lorem, ipsum dolor.</p>
				</div>
				<div className='flex flex-col  gap-8 items-start'>
					<div className='flex gap-32 items-center'>
						<button className=' items-center w-52 px-8 py-2 rounded-md bg-blue-300 text-md text-white font-semibold hover:bg-blue-500'>
							Settings
						</button>
						<MdOutlineKeyboardArrowUp size={30} color='blue' />
					</div>
					<button className=' w-52 px-8 py-2 rounded-md bg-blue-300 text-md text-white font-semibold hover:bg-blue-500'>
						Support
					</button>
					<button className=' w-52 px-8 py-2 rounded-md bg-blue-300 text-md text-white font-semibold hover:bg-blue-500'>
						Shared Photos
					</button>
					<button className='w-52 px-8 py-2 rounded-md bg-blue-300 text-md text-white font-semibold hover:bg-blue-500'>
						Shared Files
					</button>
					<div className='flex flex-col gap-6 mt-6'>
						<button className='px-36 py-2 rounded-md bg-red-400 hover:bg-red-600 text-md font-bold text-white'>
							Block
						</button>
						<button className='px-36 py-2 rounded-md bg-blue-400 hover:bg-blue-600 text-md font-bold text-white'>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
