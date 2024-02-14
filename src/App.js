import './App.css';
import React from 'react';
import {Route,Routes,NavLink,BrowserRouter} from 'react-router-dom';

import TemplateSolutionList from "./TemplateSolution/TemplateSolutionList";
import TemplateSolutionCreate from "./TemplateSolution/TemplateSolutionCreate";

import TemplateProjectList from "./TemplateProject/TemplateProjectList";
import TemplateProjectDetails from "./TemplateProject/TemplateProjectDetails";
import TemplateProjectCreate from "./TemplateProject/TemplateProjectCreate";
import TemplateProjectUpdate from "./TemplateProject/TemplateProjectUpdate";

import TemplateTechniqueList from "./TemplateTechnique/TemplateTechniqueList";
import TemplateTechniqueDetails from "./TemplateTechnique/TemplateTechniqueDetails";
import TemplateTechniqueCreate from "./TemplateTechnique/TemplateTechniqueCreate";
import TemplateTechniqueUpdate from "./TemplateTechnique/TemplateTechniqueUpdate";

import TemplateTechniqueItemList from "./TemplateTechniqueItem/TemplateTechniqueItemList";
import TemplateTechniqueItemDetails from "./TemplateTechniqueItem/TemplateTechniqueItemDetails";
import TemplateTechniqueItemUpdate from "./TemplateTechniqueItem/TemplateTechniqueItemUpdate";

import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
            <nav>
            <NavLink className="btn btn-light btn-outline-primary" to="/Home">
              <Home />
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/TemplateSolution">
              TemplateSolution
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/TemplateProject">
              TemplateProject
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/TemplateTechnique">
              TemplateTechnique
            </NavLink>
          </nav>
          <Routes>
            <Route path="/TemplateSolution" element={< TemplateSolutionList />} />
            <Route path="/TemplateSolution-create" element={< TemplateSolutionCreate />} />
            <Route path="/TemplateProject" element={< TemplateProjectList />} />
            <Route path="/TemplateProject-details/:id" element={< TemplateProjectDetails />} />
            <Route path="/TemplateProject-create" element={< TemplateProjectCreate />} />
            <Route path="/TemplateProject-update/:id" element={< TemplateProjectUpdate />} />
            <Route path="/TemplateTechnique" element={< TemplateTechniqueList />} />
            <Route path="/TemplateTechnique-details/:id" element={< TemplateTechniqueDetails />} />
            <Route path="/TemplateTechnique-create" element={< TemplateTechniqueCreate />} />
            <Route path="/TemplateTechnique-update/:id" element={< TemplateTechniqueUpdate />}/>
            <Route path="/TemplateTechniqueItem" element={< TemplateTechniqueItemList />} /> 
            <Route path="/TemplateTechniqueItem-details/:id" element={< TemplateTechniqueItemDetails />} />
            <Route path="/TemplateTechniqueItem-update/:id" element={< TemplateTechniqueItemUpdate />}/>
          </Routes>
        </div>
      </BrowserRouter>
  </div>
  );
}

export default App;
