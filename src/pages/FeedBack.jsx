import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedBack = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();

  const handleFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    axiosSecure.patch(`/classes/${id}`, { feedback }).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Feedback send!", "Thank You!", "success");
      }
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold text-center text-gray-500 mb-3">
        Feedback Here...
      </h1>
      <form
        onSubmit={handleFeedback}
        className="w-full flex items-center justify-center flex-col mx-auto"
      >
        <textarea
          name="feedback"
          placeholder="Feedback"
          className="textarea resize-none textarea-bordered textarea-lg w-6/12 mx-auto"
        ></textarea>
        <div className="text-center">
          <button type="submit" className="btn bg-green-600 text-white mt-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
