import { Textarea } from "@chakra-ui/react";
import { keyable } from "asset/types";
import _ from "lodash";
import React, { createContext, useCallback, useMemo, useState } from "react";
import DataStack from "./DataStack";

const Area = () => {
  return <Textarea value={"olar"} />;
};

export const MongoDBDataContext = createContext<keyable>({});
const MongoDBDATA = ({ data }: { data: keyable }) => {
  const [state, setState] = useState(data);

  const change = useCallback((key: string, data: Array<string | keyable>) => {
    setState((prev) => ({ ...prev, [key]: data }));
  }, []);

  const memo = useMemo(
    () => ({
      change,
    }),
    [change]
  );

  
  return (
    <MongoDBDataContext.Provider value={memo}>
      {Object.keys(state).map((key) => {
        const d = state[key];
        if (_.isArray(d)) {
          return <DataStack key={key} title={key} data={d} />;
        } else {
          return <Area key={key} />;
        }
      })}
    </MongoDBDataContext.Provider>
  );
};

export default MongoDBDATA;
