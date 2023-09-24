import './App.css';
import React from 'react';
import {Route,Routes,NavLink,BrowserRouter} from 'react-router-dom';

import  {Home}  from './Home';
import TemplateProjectList from "./TemplateProject/TemplateProjectList";
import TemplateProjectDetails from "./TemplateProject/TemplateProjectDetails";
import TemplateProjectCreate from "./TemplateProject/TemplateProjectCreate";
import TemplateProjectUpdate from "./TemplateProject/TemplateProjectUpdate";


function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
      <div>
            <nav>
              <div>      
                <ul>
                  <li>
                    <NavLink className="btn btn-light btn-outline-primary" to="/Home">
                      <Home />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn btn-light btn-outline-primary" to="/TemplateProject">
                      TemplateProject
                    </NavLink>
                  </li>
                </ul>
              </div>
          </nav>
          <Routes>
            <Route path="/Home" element={< Home />} />
            <Route path="/TemplateProject" element={< TemplateProjectList />} />
            <Route path="/TemplateProject-details/:id" element={< TemplateProjectDetails />} />
            <Route path="/TemplateProject-create" element={< TemplateProjectCreate />} />
            <Route path="/TemplateProject-update/:id" element={< TemplateProjectUpdate />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
</div>
  );
}

export default App;
