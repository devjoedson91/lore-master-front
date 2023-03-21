export function Spinner() {
    return (
        <div className="inline-block relative w-10 h-10 animate-spin">
            <div className="box-border block absolute w-8 h-8 m-1 border-[5px] rounded-[50%] animate-spin border-spinner"></div>
            <div className="box-border block absolute w-8 h-8 m-1 border-[5px] rounded-[50%] animate-spin border-spinner"></div>
            <div className="box-border block absolute w-8 h-8 m-1 border-[5px] rounded-[50%] animate-spin border-spinner"></div>
            <div className="box-border block absolute w-8 h-8 m-1 border-[5px] rounded-[50%] animate-spin border-spinner"></div>
        </div>
    );
}
