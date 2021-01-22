import React from "react";
import { useParams } from "react-router-dom";

const SingleRecordView = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h5>Record id: {id}</h5>
    </div>
  );
};

export default SingleRecordView;
