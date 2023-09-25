import { Info, keyable } from "asset/types";
import Titles from "components/typography/titles";
import _ from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import JSONInput from "react-json-editor-ajrm";
import { localeEn } from "../../../statics/localeEn";

const MongoDBDATA = ({ data }: { data: Array<Info> }) => {
  const [state, setState] = useState(data);

  const change = useCallback((key: string, data: Array<string | keyable>) => {
    setState((prev) => {
      let clone = _.clone(prev);
      clone[clone.findIndex((val) => val.name === key)].data = data;
      return clone;
    });
  }, []);

  return (
    <>
      {state.map((value) => (
        <React.Fragment key={value.name}>
          <Titles size="sm" text={value.name} />
          <JSONInput
            locale={localeEn}
            onBlur={(val:any) => {
              // Handle onBlur logic here
              console.log(val)
            }}
            placeholder={value.data}
            id={_.uniqueId("json-input-id-" + value.name)}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default MongoDBDATA;
