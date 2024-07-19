import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/AmployeeApp/Home/Home";
import About from "pages/AmployeeApp/About/About";
import LogIn from "pages/AmployeeApp/LogIn/LogIn";
import ContactUs from "pages/AmployeeApp/ContactUs/ContactUs";
import Clients from "pages/Clients/Clients";
import Audi from "pages/Clients/Audi/Audi";
import Bmw from "pages/Clients/Bmw/Bmw";
import Volkswagen from "pages/Clients/Volkswagen/Volkswagen";
import { APP_ROUTES } from "constants/routes";

// Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";

// Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";
import Homework_13 from "homeworks/Homework_13/Homework_13";

// Consultations
import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.CLIENTS} element={<Clients />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.COUNTACT_US} element={<ContactUs />} />
          <Route path={APP_ROUTES.LOGIN} element={<LogIn />} />
          <Route path={APP_ROUTES.AUDI} element={<Audi />} />
          <Route path={APP_ROUTES.BMW} element={<Bmw />} />
          <Route path={APP_ROUTES.VOLKSWAGEN} element={<Volkswagen />} />
          <Route path={APP_ROUTES.NOT_FOUND} element="Page Not Found!!!" />
        </Routes>
      </Layout> */}
      {/* <Consultation_03 /> */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_13 /> */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}
      <Homework_13 />
    </BrowserRouter>
  );
}

export default App;
