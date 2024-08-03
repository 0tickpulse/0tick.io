import Boxed from "@site/src/components/mdxGlobal/Boxed";
import Citation from "@site/src/components/mdxGlobal/Citation";
import Cite from "@site/src/components/mdxGlobal/Cite";
import { DerivativeFromLimits } from "@site/src/components/mdxGlobal/Differentiation";
import HoverableBox from "@site/src/components/mdxGlobal/HoverableBox";
import { RiemannApproximation } from "@site/src/components/mdxGlobal/RiemannApproximation";
import { ThreeDTest } from "@site/src/components/mdxGlobal/ThreeDTest";
import MDXComponents from "@theme-original/MDXComponents";
import MathEquation from "../components/Math";
import { Angle } from "../components/mdxGlobal/Angle";
import BetterMafsVectorField from "../components/mdxGlobal/BetterMafsVectorField";
import CustomMathbox from "../components/mdxGlobal/CustomMathbox";
import LinearTransformationVisualizer from "../components/mdxGlobal/LinearTransformationVisualizer";
import ParametricSurfaceTransformVisualizer from "../components/mdxGlobal/ParametricSurfaceTransformVisualizer";

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

    BetterMafsVectorField,
    ParametricSurfaceTransformVisualizer,

    MathEquation,
    CustomMathbox,
};
