import { createClient } from "@vercel/edge-config";
import { keyable } from "asset/types";
import React, { useState, useEffect } from "react";

export const getStaticProps = async () => {
    return {
        props: {
            json: await createClient(process.env.EDGE_CONFIG).getAll(),
        },
    };
};

export default function Admin({ json }: keyable) {
    const [state, setState] = useState<keyable>({})
    useEffect(() => {
        setState({ json })
    }, [])

    return (
        <div>
            {Object.values(state)?.map((a: any) => {
                return <p>{a}</p>
            })}
        </div>
    );
}
