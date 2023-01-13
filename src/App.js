import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/EmotionJsx";
import { InlineStyle } from "./components/InlineStyle";
import { Styledjsx } from "./components/StlyedJsx";
import { StyledComponents } from "./components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <Styledjsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
