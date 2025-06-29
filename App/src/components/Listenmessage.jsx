import Messages from './messages';

export const Listenmessage = ({ message, loading }) => {
  return (
    <div>
      {message.map((messagestxt) => (
        <Messages key={messagestxt.id} messagestxt={messagestxt} />
      ))}

{loading && (

<div className='flex justify-start '>
  <div className='bg-blue-950 p-5 rounded-2xl rounder-bl-none shadow-md border-gray-200'>
    <div className='flex space-x-2'>
<div className='w-3 h-3 bg-blue-300 rounded-full animate-pulse'></div>
<div className='w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100'></div>
<div className='w-3 h-3 bg-blue-200 rounded-full animate-pulse delay-200'></div>
    </div>
  </div>
</div>

)}

    </div>
  );
};

export default Listenmessage;
