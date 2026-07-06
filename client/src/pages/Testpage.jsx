import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/add-course")}>
      Test Navigate Button
    </button>
  );
};

export default TestPage;
