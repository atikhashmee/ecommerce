import React, {useEffect} from 'react';
import {View} from 'react-native';
import {AppContext} from '../utils/GlobalContext';
import HomeTabs from '../Tabs/HomeTabs';

function Home() {
  let {setInit, auth} = React.useContext(AppContext);

  useEffect(() => {
    setInit();
  }, [auth]);

  return (
    <View style={{flex: 1}}>
      <HomeTabs />
    </View>
  );
}
export default Home;
