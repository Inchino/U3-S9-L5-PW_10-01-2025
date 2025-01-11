import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import NetflixNavbar from './components/NetflixNavbar';

createRoot(document.getElementById('root')).render(<NetflixNavbar />)