

import Loader from 'react-js-loader';

const Loading = () => {
  return (
    <div  className='min-h-screen w-full flex justify-center items-center'>
      <div className='w-3/12 m-auto'>
       
        <div className='item -mt-10'>
          
          <Loader type='spinner-cub' bgColor={'#ea062b'} title={'Loading...'} size={80} />
          <Loader type='bubble-loop' bgColor={'#ea062b'} title={'Loading...'} size={100} />
        </div>
      </div>
    </div>
  );
};





export default Loading;
