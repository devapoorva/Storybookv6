import CustomAlert from './components/alert/CustomAlert';
import Badge from './components/badge/Badge';
import Card from './components/card/Card';
import AppCrousel from './components/crousel/AppCrousel';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import Card from './components/Card/Card';
function App() {
  return (
    <div> 
      <Header navPosition="end"/>
      <CustomAlert type="primary"/>
      <Badge type="primary" position={false} top={0} start={100} badgeBackground="secondary" text="Notification" badge="4" />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Card 
              imageUrl="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg" 
              heading="Card Title"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              linkText="Go anywhere"
              />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <AppCrousel />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;
