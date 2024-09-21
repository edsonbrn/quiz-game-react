
const FormHeader = () => {
    return (
        <div className="w-full flex items-center justify-center relative rounded-[10px]">
            <div className="absolute top-5 left-5 z-[10] flex items-center gap-3"></div>
            <a href="#" target="_blank" rel="noreferrer">
            </a>
            <span className="text-3xl text-black font-medium absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[-50%] rounded-tl-[10px]">
                Quiz App
            </span>
            <div className="w-full h-full absolute bg-[54,84,99,0,7] rounded-tl-[10px] rounded-tr-[10px]"></div>
        </div>
    );
};

export default FormHeader;