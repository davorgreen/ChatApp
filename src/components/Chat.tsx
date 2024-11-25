//icons

//images
import image from '../images//man-with-beard-avatar-character-isolated-icon-free-vector.jpg';

const Chat = () => {
	return (
		<div className=''>
			<div className='flex flex-col justify-between'>
				<img
					src={image}
					alt=''
					className='w-20 h-20  rounded-xl object-cover'
				/>
			</div>
		</div>
	);
};

export default Chat;
