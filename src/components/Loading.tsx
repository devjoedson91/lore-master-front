import LoadingGif from '../assets/loading.gif';

export function Loading() {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <img src={LoadingGif} alt="loading" />
        </div>
    );
}
