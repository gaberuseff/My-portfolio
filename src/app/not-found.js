import Link from "@/app/_components/Link";

function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <h1 className='text-3xl font-bold'>
                This page could not be found :(
            </h1>
            <Link
                href='/'
                className='btn-primary'
            >
                Go back home
            </Link>
        </main>
    );
}

export default NotFound;