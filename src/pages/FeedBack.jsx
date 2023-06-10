const FeedBack = () => {

    const handleFeedback = (event) => {
        event.preventDefault()
        const feedback=event.target.feedback.value;
        console.log(feedback)
    }

    return (
        <div className="w-full">
            <h1 className="text-lg font-bold text-center text-gray-500 mb-3">Feedback Here...</h1>
            <form onSubmit={handleFeedback} className="w-full flex items-center justify-center flex-col mx-auto">
                <textarea name="feedback" placeholder="Feedback" className="textarea resize-none textarea-bordered textarea-lg w-6/12 mx-auto" ></textarea>
                <div className="text-center">
                    <button type="submit" className="btn bg-green-600 text-white mt-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FeedBack;