import ChatList from './ChatList';
import User from './User';

const Lists: React.FC = () => {
	return (
		<div className='flex flex-col gap-4'>
			<User />
			<ChatList />
		</div>
	);
};

export default Lists;
