import Image from  'next/image';

export const Heroes = () => {
    return ( 
        <div className='flex flex-col items-center justify-center max-w-5xl'>
            <div className='flex items-center'>
                <div className='realtive w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]'>
                    <Image
                        src="/document.png"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full h-auto'
                        alt="Documents"
                    />
                </div>
                <div className='realtive w-[400px] h-[400px] hidden md:block'>
                    <Image
                        src="/document-dark.png"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full h-auto'
                        alt="Documents"
                    />
                </div>
            </div>
        </div>
     );
}
