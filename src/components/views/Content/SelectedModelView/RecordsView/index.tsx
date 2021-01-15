import React from "react";
import { Redirect } from "react-router-dom";

import routes from "@routes";
import { useRecordsFetching } from "./useRecordsFetching";

import { SearchInput } from "@common";
import RecordsTable from "./RecordsTable";

type RecordsViewProps = {
  model: ContentModel;
};

const RecordsView = ({ model }: RecordsViewProps) => {
  useRecordsFetching(model);

  if (model.fields.length === 0) {
    return <Redirect to={routes.modelFields} />;
  }

  return (
    <div>
      <SearchInput placeholder="SEARCH..." />
      <RecordsTable />
    </div>
  );
};

export default RecordsView;
