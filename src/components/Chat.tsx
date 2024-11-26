//icons
import {
	FaPhoneAlt,
	FaImage,
	FaCamera,
	FaMicrophone,
} from 'react-icons/fa';
import { IoVideocam } from 'react-icons/io5';
import { FaCircleInfo } from 'react-icons/fa6';
import { BsEmojiLaughingFill } from 'react-icons/bs';
//images
import image from '../images//man-with-beard-avatar-character-isolated-icon-free-vector.jpg';
//emoji library
import EmojiPicker from 'emoji-picker-react';
//hooks
import { useEffect, useRef, useState } from 'react';

interface Emoji {
	emoji: string;
}

const Chat: React.FC = () => {
	const [openEmoji, setOpenEmoji] = useState<boolean>(false);
	const [textMsg, setTextMsg] = useState<string>('');
	const down = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		down.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const handleEmoji = (e: Emoji) => {
		setTextMsg((prev) => prev + e.emoji);
		setOpenEmoji(false);
	};

	return (
		<div className='flex flex-col h-full'>
			{/* header */}
			<div className='flex gap-4 justify-between'>
				<div className='flex flex-col justify-between'>
					<img
						src={image}
						alt=''
						className='w-20 h-20 rounded-xl object-cover'
					/>
				</div>
				<div className='flex flex-col gap-4'>
					<h2>Fullname</h2>
					<p>Lorem, ipsum dolor.</p>
				</div>
				<div className='flex gap-2 justify-center'>
					<FaPhoneAlt size={30} />
					<IoVideocam size={35} />
					<FaCircleInfo size={30} />
				</div>
			</div>

			{/* msg scroll*/}
			<div className='flex flex-col gap-6 overflow-y-auto h-[400px] xl:mt-10'>
				<div className='bg-slate-400 px-4 py-2 rounded-xl mr-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
				</div>
				<span className=''>1 min ago</span>
				<div className='bg-blue-400 px-4 py-2 rounded-xl ml-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
				</div>
				<span className='flex justify-end'>1 min ago</span>
				<div className='bg-slate-400 px-4 py-2 rounded-xl mr-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
				</div>
				<span className=''>1 min ago</span>
				<div className='bg-blue-400 px-4 py-2 rounded-xl ml-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
				</div>
				<span className='flex justify-end'>1 min ago</span>
				<div className='bg-slate-400 px-4 py-2 rounded-xl mr-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
				</div>
				<span className=''>1 min ago</span>
				<div className='bg-blue-400 px-4 py-2 rounded-xl ml-10'>
					<div className='flex items-center gap-2'>
						<img
							src={image}
							alt=''
							className='w-20 h-20 rounded-xl'
						/>
						<h2>Fullname</h2>
					</div>
					<div className='flex'>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Maiores sed perferendis illo deleniti similique
							tenetur nihil, officia dolorem deserunt ut.
						</p>
					</div>
					<img src={image} alt='' className='' />
				</div>
				<span className='flex justify-end'>1 min ago</span>
				<div ref={down}></div>
			</div>
			{/* input*/}
			<div className='flex gap-2 mt-10 sm:mt-16 lg:mt-12 xl:mt-0 items-center relative'>
				<FaImage size={40} />
				<FaCamera size={40} />
				<FaMicrophone size={30} />
				<input
					type='text'
					placeholder='Text...'
					className='bg-slate-300 w-full px-8 py-4 rounded-md'
					value={textMsg}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTextMsg(e.target.value)
					}
				/>
				<BsEmojiLaughingFill
					size={40}
					onClick={() => setOpenEmoji((prev) => !prev)}
				/>
				<div className='absolute bottom-16 left-[400px]'>
					{openEmoji && <EmojiPicker onEmojiClick={handleEmoji} />}
				</div>
				<button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;
