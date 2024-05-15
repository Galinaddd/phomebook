import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <div>
      <ContactForm />
      <h2>Find contact by name</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
