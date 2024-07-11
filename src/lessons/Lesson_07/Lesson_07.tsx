import { Lesson07Wrapper } from "./styles";
import { WEATHER_CODES } from "./types";

function Lesson_07() {
  const decode = (weatherCode: WEATHER_CODES): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };

  const showWeather = (
    weatherCode: WEATHER_CODES,
    decodeFunc: (weatherCode: WEATHER_CODES) => string
  ) => {
    console.log(decodeFunc(weatherCode));
  };

  showWeather(WEATHER_CODES.FC, decode);

  type ArrayGenerator<ValueType> = ValueType[];

  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
  const numbers: ArrayGenerator<number> = [1, 2, 3];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  // Можно прокидывать не только 1 дженерик аргумент, а сколько угодно через запятую
  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1235346245,
  };

  const item2: ShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const item3: ShopItems<ValueForMac> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 1231241352345,
    },
  };

  return <Lesson07Wrapper>Lesson 07</Lesson07Wrapper>;
}

export default Lesson_07;
