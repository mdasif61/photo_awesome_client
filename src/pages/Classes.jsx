import '../Css/Classes.css'
import ClassesCart from "./ClassesCart";
import Container from "../container/Container";
import useApproveClass from '../hooks/useApproveClass';

const Classes = () => {

    const {approvedClass}=useApproveClass()

    return (
        <div className="classBG">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
                    {
                        approvedClass.map(singleClass => <ClassesCart
                            key={singleClass._id}
                            singleClass={singleClass}
                        ></ClassesCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Classes;