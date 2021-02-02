import React from "react";

import TextInput from "./TextInput";
import { Input, Checkbox } from "@common";

type RecordFormItemProps = {
  field: ContentField;
  itemData: RecordItem;
  handleChange: (value: string | boolean | number, fieldName: string) => void;
};

const RecordFormItem = ({ field, itemData, handleChange }: RecordFormItemProps) => {
  switch (field.type) {
    case "text":
      return <TextInput field={field} itemData={itemData} handleChange={handleChange} />;
    case "number":
      return (
        <>
          <label htmlFor={field.name}>{field.name}</label>
          <Input
            type="number"
            id={field.name}
            min={field.min}
            max={field.max}
            placeholder={field.integer ? "Integer number" : "Number"}
            value={String(itemData.value)}
            onChange={(e) => handleChange(Number(e.currentTarget.value), field.name)}
          />
        </>
      );
    case "boolean":
      return (
        <>
          <Checkbox
            id={field.name}
            checked={Boolean(itemData.value)}
            onChange={(e) => handleChange(e.target.checked, field.name)}
            label={field.name}
          />
        </>
      );
    case "date":
      return (
        <>
          <label htmlFor={field.name}>{field.name}</label>
          <Input
            type="date"
            id={field.name}
            value={String(itemData.value)}
            onChange={(e) => handleChange(e.currentTarget.value, field.name)}
          />
        </>
      );
    case "color":
      return (
        <>
          <label htmlFor={field.name}>{field.name}</label>
          <Input
            type="color"
            id={field.name}
            placeholder="color"
            value={String(itemData.value)}
            onChange={(e) => handleChange(e.currentTarget.value, field.name)}
          />
        </>
      );
  }
};

export default RecordFormItem;
