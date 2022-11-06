import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/phonebookSlice';
import { getContacts, getFilteredContacts } from 'redux/selectors';

import { List, ContactListItem, ContactListButton } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterContacts = useSelector(getFilteredContacts);
  const normalized = filterContacts.toLocaleLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <span>{name} :</span>
            <span>{number}</span>
            <ContactListButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactListButton>
          </ContactListItem>
        );
      })}
    </List>
  );
};
