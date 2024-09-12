import { MathEquation } from "@site/src/components/Math";
import { Angle } from "@site/src/components/mdxGlobal/Angle";
import BetterMafsVectorField from "@site/src/components/mdxGlobal/BetterMafsVectorField";
import Boxed from "@site/src/components/mdxGlobal/Boxed";
import Citation from "@site/src/components/mdxGlobal/Citation";
import Cite from "@site/src/components/mdxGlobal/Cite";
import CustomMathbox from "@site/src/components/mdxGlobal/CustomMathbox";
import { DerivativeFromLimits } from "@site/src/components/mdxGlobal/Differentiation";
import DivergenceVisualization from "@site/src/components/mdxGlobal/DivergenceVisualization";
import HoverableBox from "@site/src/components/mdxGlobal/HoverableBox";
import LinearTransformationVisualizer from "@site/src/components/mdxGlobal/LinearTransformationVisualizer";
import ParametricSurfaceTransformVisualizer from "@site/src/components/mdxGlobal/ParametricSurfaceTransformVisualizer";
import { RiemannApproximation } from "@site/src/components/mdxGlobal/RiemannApproximation";
import { ThreeDTest } from "@site/src/components/mdxGlobal/ThreeDTest";
import MDXComponents from "@theme-original/MDXComponents";
import NonlinearTransformationVisualizer from "../components/mdxGlobal/NonlinearTransformationVisualizer";
import { SliderInput } from "../components/mdxGlobal/controlPanel/SliderInput";
import { ControlPanel } from "../components/mdxGlobal/controlPanel/ControlPanel";

export default {
    ...MDXComponents,
    Angle,
    Boxed,
    Citation,
    Cite,
    DerivativeFromLimits,
    DivergenceVisualization,
    LinearTransformationVisualizer,
    NonlinearTransformationVisualizer,
    HoverableBox,
    RiemannApproximation,
    ThreeDTest,

    ControlPanel,
    SliderInput,

    BetterMafsVectorField,
    ParametricSurfaceTransformVisualizer,

    MathEquation,
    CustomMathbox,
};
