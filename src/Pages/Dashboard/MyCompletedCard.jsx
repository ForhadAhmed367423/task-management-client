
const MyCompletedCard = ({completed}) => {
    return (
        <div className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
            {
                <>
                    <h1 className="overflow-hidden">{completed.title}</h1>
                    <p>{completed.task}</p>
                </>
            }
        </div>
    );
};

export default MyCompletedCard;