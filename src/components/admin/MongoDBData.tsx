import { Textarea } from "@chakra-ui/react";
import { Info, keyable } from "asset/types";
import _ from "lodash";
import React, { createContext, useCallback, useMemo, useState } from "react";
import DataStack from "./DataStack";

const Area = () => {
  return <Textarea value={"olar"} />;
};

export const MongoDBDataContext = createContext<keyable>({});
const MongoDBDATA = ({ data }: { data: Array<Info> }) => {
  const [state, setState] = useState(data);

  const change = useCallback((key: string, data: Array<string | keyable>) => {
    setState((prev) => {
      let clone = _.clone(prev);
      clone[clone.findIndex((val) => val.name === key)].data = data;
      return clone
    });
  }, []);

  const memo = useMemo(
    () => ({
      change,
    }),
    [change]
  );


  return (
    <MongoDBDataContext.Provider value={memo}>
      {state.map((value) => {
        if (_.isArray(value.data)) {
          return <DataStack key={"stack" + value.name} title={value.name} data={value.data} />;
        } else {
          return <Area key={"area" + value.name} />;
        }
      })}
    </MongoDBDataContext.Provider>
  );
};

export default MongoDBDATA;
