import { LoaderIcon } from 'lucide-react';
import React from 'react';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <LoaderIcon size={50} className='animate-spin'/>
        </div>
    );
};

export default Loader;