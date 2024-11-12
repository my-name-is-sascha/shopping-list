## Shopping List Application

This application is a simple, interactive shopping list manager built with React. Users can add items to the list, mark items as completed, and delete items. The app uses local storage to save the list so that it persists between page reloads.

### Components Overview

#### `App.jsx`

The main component that initializes the application.

- **State Management**:

  - Manages the list of items in state using `useState`.
  - Retrieves the list from `localStorage` on initial load, and updates `localStorage` whenever items are added, removed, or edited.

- **Functions**:

  - `addItem`: Adds a new item to the list, generating a unique ID using `nanoid`, and stores it in local storage. Displays a success toast upon adding an item.
  - `removeItem`: Removes an item from the list based on its unique ID and updates the state and `localStorage`.
  - `editItem`: Toggles the `completed` status of an item and updates the state and `localStorage`.

- **UI**:
  - Renders the main interface with components `Form` and `Items`.
  - Uses `react-toastify` for notifications.

#### `Form.jsx`

A form component allowing users to add new items to the list.

- **State Management**:

  - `newItemName`: Stores the name of the item being added.

- **Functions**:

  - `handleSubmit`: Checks if the input is empty before calling `addItem` and displays an error toast if no name is provided.

- **UI**:
  - Displays an input field for item names and a button to add items.

#### `Items.jsx`

Renders a list of all items using the `SingleItem` component.

- **Props**:
  - `items`: The list of items.
  - `removeItem`: Function to remove an item.
  - `editItem`: Function to toggle completion status.

#### `SingleItem.jsx`

Represents each item in the list with a checkbox, item name, and a delete button.

- **Props**:
  - `item`: Individual item object with properties `id`, `name`, and `completed`.
  - `removeItem`: Function to remove the item.
  - `editItem`: Function to toggle completion status.

### Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app at `http://localhost:3000`.

### Dependencies

- `react`: Library for building the UI.
- `react-toastify`: For displaying notifications.
- `nanoid`: For generating unique IDs for each item.

### Additional Notes

- **Local Storage**: The app saves the list to `localStorage`, ensuring persistence across page reloads.
- **Notifications**: Success and error notifications are displayed using `react-toastify` for a better user experience.
