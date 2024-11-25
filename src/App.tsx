import Chat from './components/Chat';
import Detail from './components/Detail';
import Lists from './components/Lists';

function App() {
	return (
		<div className='flex justify-center bg-slate-400 items-center w-screen h-screen relative'>
			<div className='absolute top-8 left-[96px] w-[90%] h-16 bg-gray-800 rounded-t-2xl text-white text-center'>
				<div className='flex justify-center items-center mt-4 gap-4'>
					<div className='bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center'></div>
					<div className='bg-gray-600 w-32 h-2 rounded-full flex items-center justify-center'></div>
				</div>
			</div>
			{/* screen */}
			<div className='w-[90%] h-[85%] bg-white mt-8 mx-auto flex items-center'>
				<div className='w-1/4 h-full bg-gray-200 p-4 '>
					<Lists />
				</div>
				<div className='flex-1 h-full bg-gray-100 p-4'>
					<Chat />
				</div>
				<div className='w-1/4 h-full bg-gray-200 p-4'>
					<Detail />
				</div>
			</div>
			{/* button */}
			<div className='absolute bottom-4 w-16 h-16 bg-gray-800 rounded-full mx-auto left-0 right-0'></div>
		</div>
	);
}

export default App;
