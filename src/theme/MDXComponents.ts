import { MathEquation } from "@site/src/components/Math";
import { Angle } from "@site/src/components/mdxGlobal/Angle";
import BetterMafsVectorField from "@site/src/components/mdxGlobal/BetterMafsVectorField";
import Boxed from "@site/src/components/mdxGlobal/Boxed";
import Citation from "@site/src/components/mdxGlobal/Citation";
import Cite from "@site/src/components/mdxGlobal/Cite";
import CustomMathbox, { OldMathbox } from "@site/src/components/mdxGlobal/CustomMathbox";
import { DerivativeFromLimits } from "@site/src/components/mdxGlobal/Differentiation";
import DivergenceVisualization from "@site/src/components/mdxGlobal/DivergenceVisualization";
import HoverableBox from "@site/src/components/mdxGlobal/HoverableBox";
import LinearTransformationVisualizer from "@site/src/components/mdxGlobal/LinearTransformationVisualizer";
import ParametricSurfaceTransformVisualizer from "@site/src/components/mdxGlobal/ParametricSurfaceTransformVisualizer";
import { RiemannApproximation } from "@site/src/components/mdxGlobal/RiemannApproximation";
import { ThreeDTest } from "@site/src/components/mdxGlobal/ThreeDTest";
import MDXComponents from "@theme-original/MDXComponents";
import NonlinearTransformationVisualizer from "../components/mdxGlobal/NonlinearTransformationVisualizer";
import { Checkbox } from "../components/mdxGlobal/controlPanel/Checkbox";
import { ControlPanel } from "../components/mdxGlobal/controlPanel/ControlPanel";
import { Dropdown } from "../components/mdxGlobal/controlPanel/Dropdown";
import { Pills } from "../components/mdxGlobal/controlPanel/Pills";
import { SliderInput } from "../components/mdxGlobal/controlPanel/SliderInput";
import { PolarCoordinateVisualizer } from "../components/mdxGlobal/PolarCoordinatePlayground";

import * as mafs from "mafs";
import { ArcLengthVisualizer } from "../components/mdxGlobal/ArcLengthVisualizer";
import { LineIntegralVisualizer3D } from "../components/mdxGlobal/LineIntegralVisualizer3D";

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
    PolarCoordinateVisualizer,
    ArcLengthVisualizer,
    LineIntegralVisualizer3D,

    ControlPanel,
    SliderInput,
    Dropdown,
    Pills,
    Checkbox,

    ...mafs, // This is probably bad practice but whatever

    BetterMafsVectorField,
    ParametricSurfaceTransformVisualizer,

    MathEquation,
    CustomMathbox,
    OldMathbox,
};
