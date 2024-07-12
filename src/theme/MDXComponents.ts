import Boxed from "@site/src/components/mdxGlobal/Boxed";
import Citation from "@site/src/components/mdxGlobal/Citation";
import Cite from "@site/src/components/mdxGlobal/Cite";
import HoverableBox from "@site/src/components/mdxGlobal/HoverableBox";
import MDXComponents from "@theme-original/MDXComponents";
import { DerivativeFromLimits } from "@site/src/components/mdxGlobal/Differentiation";
import { RiemannApproximation } from "@site/src/components/mdxGlobal/RiemannApproximation";
import { ThreeDTest } from "@site/src/components/mdxGlobal/ThreeDTest";
import { Angle } from "../components/mdxGlobal/Angle";
import LinearTransformationVisualizer from "../components/mdxGlobal/LinearTransformationVisualizer";
import MathEquation from "../components/Math";

export default {
    ...MDXComponents,
    Angle,
    Boxed,
    Citation,
    Cite,
    DerivativeFromLimits,
    LinearTransformationVisualizer,
    HoverableBox,
    RiemannApproximation,
    ThreeDTest,

    MathEquation,
};
