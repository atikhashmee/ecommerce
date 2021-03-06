import React from 'react';

export const UtilityContext = React.createContext();

export default function AppUtilityProvder(props) {
  const [halfModalVisible, setHalfModalVisible] = React.useState(false);

  return (
    <UtilityContext.Provider
      value={{
        halfModalVisible,
        setHalfModalVisible,
      }}>
      {props.children}
    </UtilityContext.Provider>
  );
}
