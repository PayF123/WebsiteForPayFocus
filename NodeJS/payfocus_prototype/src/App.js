import './App.css';
import { BodyComponent } from './component/BodyComponent';
import { FooterComponent } from './component/FooterComponent';
import { HeaderComponent } from './component/HeaderComponent';

function App() {
  return (
    <div>
    <HeaderComponent></HeaderComponent>
    <BodyComponent></BodyComponent>
    <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
