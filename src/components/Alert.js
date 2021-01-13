import React from 'react';
import {Button, Snackbar} from 'react-native-paper';
import {Dimensions} from 'react-native';

export default function Alert({msg, displayValue}) {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  React.useEffect(() => {
    setVisible(true);
  }, [msg]);
  return (
    <Snackbar
      wrapperStyle={{
        width: Dimensions.get('screen').width,
        position: 'absolute',
        bottom: displayValue,
        marginBottom: 4,
      }}
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: 'X',
        onPress: () => {
          // Do something
        },
      }}>
      {msg}
    </Snackbar>
  );
}
