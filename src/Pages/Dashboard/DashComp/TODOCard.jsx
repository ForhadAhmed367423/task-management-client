import UseTaskHooks from "../../../Hooks/UseTaskHooks";

const TODOCard = () => {
    const [tasks] = UseTaskHooks();

    return (
        <div>
            <h3>{tasks.task}</h3>
        </div>
    );
};

export default TODOCard;