interface ScoreProps {
    score: number;
}

const Score = ({score}: ScoreProps) => {
    return(
        <div className="w-full flex flex-col items-center gap-5 justify-center mt-5 mb-10">
            <span className="font-medium text-3xl text-slate-700">{score} / 7</span>
            <span className="font-medium text-[17px] text-slate-700">
                You have earned <span className="text-[17px] font-medium text-blue-600">{score} </span>
                points of total <span className="text-[17px] font-medium text-blue-600"></span>
                points.
            </span>
        </div>
    );
};

export default Score;