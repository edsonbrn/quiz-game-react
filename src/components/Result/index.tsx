import Reset from "./Reset";
import Score from "./Score";

interface ResultProps {
    score: number;
    reset: () => void;
}

const Result = ({score, reset}: ResultProps) => {
    return (
        <>
            <Score score={score}/>
            <Reset reset={reset}/>
        </>
    )
}

export default Result;