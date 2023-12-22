
const MyOnCard = ({ongoing}) => {
    return (
        <div className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
            {
                <>
                    <h1 className="overflow-hidden">{ongoing.title}</h1>
                    <p>{ongoing.task}</p>
                </>
            }
        </div>
    );
};

export default MyOnCard;