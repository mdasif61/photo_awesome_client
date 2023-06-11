import { useLottie } from 'lottie-react';
import error from '../../public/errorAnim.json'
import { Link } from 'react-router-dom';
const Error = () => {

    const options = {
        animationData: error,
        loop: true
    }

    const { View } = useLottie(options)

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center'>
            <div className='w-2/12 mx-auto'>
                {View}
            </div>
            <div className='text-center mt-5'>
                <Link to='/'>
                    <button className='btn bg-green-600 text-white'>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;