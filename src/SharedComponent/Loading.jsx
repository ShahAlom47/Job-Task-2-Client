

import Loader from 'react-js-loader';

const Loading = () => {
  return (
    <div  className='min-h-screen w-full flex justify-center items-center'>
      <div className='w-3/12 m-auto'>
       
        <div className='item -mt-10'>
          
          <Loader type='spinner-cub' bgColor={'#0063d1'} title={'Loading...'} size={80} />
          <Loader type='bubble-loop' bgColor={'#0063d1'} title={'Loading...'} size={100} />
        </div>
      </div>
    </div>
  );
};





export default Loading;
