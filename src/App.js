import './App.css';
import React from 'react';
import {Route,Routes,NavLink,BrowserRouter} from 'react-router-dom';

import TemplateProjectList from "./TemplateProject/TemplateProjectList";
import TemplateProjectDetails from "./TemplateProject/TemplateProjectDetails";
import TemplateProjectCreate from "./TemplateProject/TemplateProjectCreate";
import TemplateProjectUpdate from "./TemplateProject/TemplateProjectUpdate";

import TemplateTechniqueList from "./TemplateTechnique/TemplateTechniqueList";
import TemplateTechniqueDetails from "./TemplateTechnique/TemplateTechniqueDetails";
import TemplateTechniqueCreate from "./TemplateTechnique/TemplateTechniqueCreate";
import TemplateTechniqueUpdate from "./TemplateTechnique/TemplateTechniqueUpdate";

import Home from "./Home";

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
                  <li>
                    <NavLink className="btn btn-light btn-outline-primary" to="/TemplateTechnique">
                      TemplateTechnique
                    </NavLink>
                  </li>
                </ul>
              </div>
          </nav>
          <Routes>
            <Route path="/TemplateProject" element={< TemplateProjectList />} />
            <Route path="/TemplateProject-details/:id" element={< TemplateProjectDetails />} />
            <Route path="/TemplateProject-create" element={< TemplateProjectCreate />} />
            <Route path="/TemplateProject-update/:id" element={< TemplateProjectUpdate />} />
            <Route path="/TemplateTechnique" element={< TemplateTechniqueList />} />
            <Route path="/TemplateTechnique-details/:id" element={< TemplateTechniqueDetails />} />
            <Route path="/TemplateTechnique-create" element={< TemplateTechniqueCreate />} />
            <Route path="/TemplateTechnique-update/:id" element={< TemplateTechniqueUpdate />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
</div>
  );
}

export default App;
