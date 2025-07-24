'use client'

function Error({ error, reset }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6 mt-12 text-center'>
            <h1 className='sm:text-4xl text-3xl font-bold'>Something went wrong!</h1>
            <p className='text-gray-700 sm:text-lg text-base'>{error.message}!</p>

            <button
                onClick={() => reset()}
                className='btn-primary'>
                Try again
            </button>
        </main>
    )
}

export default Error