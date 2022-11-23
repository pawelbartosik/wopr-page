import { DatePicker, Button } from "antd";
import CarouselHeader from "./components/header/CarouselHeader";

const App = () => {
  return (
    <div>
      <DatePicker />
      <Button>Wyloguj</Button>
      <CarouselHeader />
    </div>
  );
};

export default App;
