
// Import necessary components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import News from './components/News';

// Main App component
export default class App extends Component {
  
 render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar /> 

        {/* Routes for different pages */}
        <Routes>
          {/* Homepage route */}
          <Route path="/Headline-Hub" element={<Homepage title='Headline Hub' />} />

          {/* News category routes */}
          <Route path="/general" element={<News key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health" />} />
          <Route path="/business" element={<News key="business" pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" />} />
          <Route path="/sport" element={<News key="sport" pageSize={6} country="in" category="sport" />} />
          <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </div>
    )
 }
}