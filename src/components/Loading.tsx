import LoadingGif from '../assets/loading.gif';

export function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <img src={LoadingGif} alt="loading" />
        </div>
    );
}
