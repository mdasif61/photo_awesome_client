import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {

    const {selectClass,refetch}=useSelectedClass()

    return (
        <div className="p-12">
            <h1 className="text-xl font-bold">Total Select Class : {selectClass.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    selectClass.map(select=>(
                        <div key={select._id}>
                            <div>
                                <img src={select.image} alt="" />
                            </div>
                            <div>
                                <h1>Class : {select.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MySelectedClass;