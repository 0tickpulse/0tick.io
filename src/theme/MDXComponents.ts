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
import NonlinearTransformationVisualizer from "@site/src/components/mdxGlobal/NonlinearTransformationVisualizer";
import { PolarCoordinateVisualizer } from "@site/src/components/mdxGlobal/PolarCoordinatePlayground";
import { Checkbox } from "@site/src/components/mdxGlobal/controlPanel/Checkbox";
import { ControlPanel } from "@site/src/components/mdxGlobal/controlPanel/ControlPanel";
import { Dropdown } from "@site/src/components/mdxGlobal/controlPanel/Dropdown";
import { Pills } from "@site/src/components/mdxGlobal/controlPanel/Pills";
import { SliderInput } from "@site/src/components/mdxGlobal/controlPanel/SliderInput";

import * as mafs from "mafs";
import { ArcLengthVisualizer } from "@site/src/components/mdxGlobal/ArcLengthVisualizer";
import { LineIntegralVisualizer3D } from "@site/src/components/mdxGlobal/LineIntegralVisualizer3D";
import LinearTransformationVisualizer3D from "@site/src/components/mdxGlobal/LinearTransformationVisualizer3D";
import { DeterminantCube } from "@site/src/components/mdxGlobal/DeterminantCube";
import { CoulombLawVisualizer } from "@site/src/components/mdxGlobal/CoulombLawVisualizer";
import { LightPolarizationPlayground } from "../components/mdxGlobal/LightPolarizationPlayground";
import { DoublePendulumVisualizer } from "../components/mdxGlobal/DoublePendulumVisualizer";

export default {
    ...MDXComponents,
    Angle,
    Boxed,
    Citation,
    Cite,
    CoulombLawVisualizer,
    DerivativeFromLimits,
    DivergenceVisualization,
    DeterminantCube,
    DoublePendulumVisualizer,
    LinearTransformationVisualizer,
    LinearTransformationVisualizer3D,
    NonlinearTransformationVisualizer,
    HoverableBox,
    RiemannApproximation,
    ThreeDTest,
    PolarCoordinateVisualizer,
    ArcLengthVisualizer,
    LineIntegralVisualizer3D,

    LightPolarizationPlayground,

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
