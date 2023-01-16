import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Addentry from "./routes/Addentry";
import TimeEntries from "./routes/TimeEntries";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TimeEntriesI } from "./interface/interfaces";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Auth from "./routes/Auth";
import TimeDetails from "./routes/TimeDetails";
import NotAuthorized from "./routes/NotAuthorized";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  //@ts-ignore
  const [users, setUsers] = useState<any[]>(
  //@ts-ignore
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [dateTime, setDateTime] = useState<Dayjs>(dayjs());
  const [desc, setDesc] = useState<string>("");
  const [task, setTask] = useState<string>("");
  //@ts-ignore
  const [timeEntries, setTimeEntries] = useState<TimeEntriesI[]>(
  //@ts-ignore
    JSON.parse(localStorage.getItem("timeEntries")) || []
  );
  const [active, setActive] = useState({
    act: null,
    ids: [...timeEntries],
  });
  
  const [sidebar, setSidebar] = useState<boolean>(false);
  //@ts-ignore
  const [currentUser, setCurrentUser] = useState<any | null>(
  //@ts-ignore
    JSON.parse(localStorage.getItem("user") || null)
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Root
              currentUser={currentUser}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
          }
        >
          <Route index element={<Home currentUser={currentUser}/>} />
          <Route
            path="/addentry"
            element={
              <Addentry
                dateTime={dateTime}
                setDateTime={setDateTime}
                timeEntries={timeEntries}
                setTimeEntries={setTimeEntries}
                desc={desc}
                setDesc={setDesc}
                task={task}
                setTask={setTask}
                currentUser={currentUser}
                sidebar={sidebar}
              />
            }
          />
          <Route
            path="time-entries"
            element={
              <TimeEntries
                timeEntries={timeEntries}
                setTimeEntries={setTimeEntries}
                dateTime={dateTime}
                setDateTime={setDateTime}
                active={active}
                setActive={setActive}
              />
            }
          ></Route>
          <Route
            path="time-entries/details/:id"
            element={<TimeDetails dateTime={dateTime} />}
          ></Route>
          <Route path="notauthorized" element={<NotAuthorized/>}></Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route
            path="/auth/register"
            element={
              <Register
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                role={role}
                setRole={setRole}
                users={users}
                setUsers={setUsers}
              />
            }
          ></Route>
          <Route
            path="/auth/login"
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                users={users}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
