import HelloComponent from './components/hello';
import CoctailsContainer from './components/cocktails-container/index';
import FilterComponent from './components/filter';

const component = new HelloComponent();
const coctailsContainer = new CoctailsContainer();
const filterComponent = new FilterComponent({
  filterBy: 'strDrink'
  // other options...
});

const root = document.getElementById('root');

if (root) {
  // root.append(component.element);
  root.append(filterComponent.element);
  root.append(coctailsContainer.element);
} else {
  throw new Error('Root element not found');
}
