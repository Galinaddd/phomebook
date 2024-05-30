import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const HomePage = () => {
  return (
    <>
      <h2>HomePage</h2>

      <div>
        <ContactForm />
        <h2>Find contact by name</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
