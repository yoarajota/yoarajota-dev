import { Textarea } from "@chakra-ui/react";
import { keyable } from "asset/types";
import _ from "lodash";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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

  const Mapped = useCallback(() => {
    let arrData = [];
    for (let key in state) {
      let d = state[key];
      if (_.isArray(d)) {
        arrData.push(<DataStack title={key} data={d} />);
      } else {
        arrData.push(<Area />);
      }
    }

    return <>{...arrData}</>;
  }, [state]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const memo = useMemo(
    () => ({
      change,
    }),
    [change]
  );

  return (
    <MongoDBDataContext.Provider value={memo}>
      <Mapped />
    </MongoDBDataContext.Provider>
  );
};

export default MongoDBDATA;
