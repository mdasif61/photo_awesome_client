import useClasses from "../hooks/useClasses";
import '../Css/Classes.css'
import ClassesCart from "./ClassesCart";
import Container from "../container/Container";

const Classes = () => {

    const { classes } = useClasses()

    return (
        <div className="classBG">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
                    {
                        classes.map(singleClass => <ClassesCart
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