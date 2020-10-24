import React from 'react';
import {View, Text} from 'react-native';

const CategoryItem = ({subCategoryArr}) => {
  return (
    <>
      {subCategoryArr.length > 0 &&
        subCategoryArr.map((it, ind) => {
          return (
            <View
              key={ind}
              style={{
                padding: 20,
                borderColor: '#000',
                borderWidth: 1,
                flexBasis: '30%',
                marginTop: 10,
              }}>
              <Text>{it.category_name}</Text>
            </View>
          );
        })}
    </>
  );
};
export default CategoryItem;
