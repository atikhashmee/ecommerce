import React, {useEffect} from 'react';
import {View} from 'react-native';
import {AppContext} from '../utils/GlobalContext';
import HomeTabs from '../Tabs/HomeTabs';

function Home() {
  let {setInit} = React.useContext(AppContext);

  useEffect(() => {
    setInit();
  }, []);

  return (
    <View style={{flex: 1}}>
      <HomeTabs />
    </View>
  );
}
export default Home;
