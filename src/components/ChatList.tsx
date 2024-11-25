//icons
import { FaSearch } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import image from '../images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg';

const ChatList = () => {
	return (
		<div className='flex flex-col gap-4 h-[550px] overflow-y-auto p-4 bg-gray-100 rounded-md'>
			{/* searc bar */}
			<div className='flex gap-2'>
				<FaSearch size={25} />
				<input
					type='text'
					placeholder='Search...'
					className='rounded-md w-72 text-center text-lg'
				/>
				<IoIosAddCircle size={30} />
			</div>
			{/* list */}
			<div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4 object-cover'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4 object-cover'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4 object-cover'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
				<div className='flex gap-4 border-b-2 border-slate-500'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl mb-4 object-cover'
					/>
					<div>
						<span>Fullname</span>
						<p>Hello</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatList;
