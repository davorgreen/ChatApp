//icons
import { IoIosMore } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
//image
import image from '../images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg';

const User: React.FC = () => {
	return (
		<div className='flex justify-between'>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<h3>Fullname</h3>
				<img
					src={image}
					alt=''
					className='w-20 h-20 rounded-xl object-cover'
				/>
			</div>
			<div className='flex gap-4'>
				<IoIosMore size={30} />
				<IoVideocam size={30} />
				<FaEdit size={30} />
			</div>
		</div>
	);
};

export default User;
