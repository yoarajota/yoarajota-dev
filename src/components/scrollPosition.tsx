import { Box } from "@chakra-ui/react";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef, useEffect } from "react";
import { useTriggerState } from "react-trigger-state";
import { ClientContext } from "./contexts/client";

function ScrollPosition() {
  const wrap = useRef<HTMLDivElement>(null);
  const { ref } = useContext(ClientContext);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  const [i, setHookedYPosition] = useTriggerState({
    name: "hookedYPosition",
    initial: 0,
  });

  const [ii, setScrollYProgressTriggerState] = useTriggerState({
    name: "scrollYProgress",
    initial: scrollYProgress,
  });

  const [iii, setMotioned] = useTriggerState({
    name: "motioned",
    initial: new MotionValue(),
  });

  const calcPercentageWithoutResumeSection =
    (ref.current?.offsetHeight ?? 0.001) / (wrap.current?.offsetHeight ?? 1);
  const sum = useTransform(
    scrollYProgress,
    (value) => value + calcPercentageWithoutResumeSection
  );

  setMotioned(
    useSpring(sum, {
      stiffness: 120,
      damping: 30,
      restDelta: 0.0001,
      restSpeed: 1,
    })
  );

  useEffect(() => {
    const a = scrollYProgress.onChange((v) => {
      setHookedYPosition(v);
    });
    const b = scrollYProgress.onChange(() => {
      setScrollYProgressTriggerState(scrollYProgress);
    });

    return () => {
      a();
      b();
    };
  }, []);

  return <Box w="100%" h="100%" bg="red" position="absolute"></Box>;
}

export default ScrollPosition;
