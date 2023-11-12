import {View, Text, Image} from 'react-native';
import React from 'react';

const HeaderDetail = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1615295972i/30985332._SY540_.jpg',
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 150 / 2,
                borderColor: '#4584FF',
                borderWidth: 2,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: 'black',
              }}>
              Todoroki
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: '#8D94A3',
            }}>
            20 Juni 2022
          </Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'black',
            paddingVertical: 10,
          }}>
          Error CORS di laravel 8
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: '#8D94A3',
          }}>
          Bagaimana cara mengatasi error CORS di laravel 8?Mohon batuannya semua{' '}
        </Text>
      </View>
    </>
  );
};

export default HeaderDetail;
