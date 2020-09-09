import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Details() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'Forth Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      title: 'Fifth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Sixth Item',
    },    {
      id: '1d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '2ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '38694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '4d7acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'Forth Item',
    },
    {
      id: '5ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      title: 'Fifth Item',
    },
    {
      id: '68694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Sixth Item',
    },
    {
      id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '8ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '98694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '117acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'Forth Item',
    },
    {
      id: '12c68afc-c605-48d3-a4f8-fbd91aa97f62',
      title: 'Fifth Item',
    },
    {
      id: '13694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Sixth Item',
    },
    {
      id: '147acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '15c68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '17694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '167acbea-c1b1-46c2-aed5-3ad53abb28b1',
      title: 'Forth Item',
    },
    {
      id: '19c68afc-c605-48d3-a4f8-fbd91aa97f62',
      title: 'Fifth Item',
    },
    {
      id: '21694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Sixth Item',
    },

  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DETAIL</Text>
        <Text style={styles.ammount}>$64.342</Text>  
      </View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: "90%"}}>
          <View style={{alignItems: "center"}}>
            <Text style={styles.ammountTitle}>$36.200</Text>
            <Text style={styles.subtitle}>Weekly profit</Text>
          </View>
          <View
              style={{
              borderLeftWidth: 1,
              borderLeftColor: 'grey',
              }}
          />
          <View style={{alignItems: "center"}}>
            <Text style={styles.ammountTitle}>$52.234</Text>
            <Text style={styles.subtitle}>Monthly income</Text>
          </View>
        </View>  
      </View>
      <View style={{flexDirection: 'row', width: "85%", marginTop: -20}}> 
        <View style={{width: "50%", alignItems: 'center'}}>
          <Text style={{ fontSize: 25 }}>Year </Text>
        </View>
        <View style={{width: "50%", alignItems: 'center'}}>
          <Text style={{ fontSize: 25 }}>Amount</Text>
        </View>
      </View>
      <FlatList 
        style={{width: "85%"}}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={{flexDirection: 'row'}}> 
            <View style={{width: "50%", alignItems: 'center'}}>
              <Text style={{ fontSize: 18 }}>{index+1} </Text>
            </View>
            <View style={{width: "50%", alignItems: 'center'}}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
            </View>
          </View>
          )
        }
        />
         <View style={{width: "50%", alignItems: 'center'}}>
          <Text style={{ fontSize: 25 }}>AD </Text>
        </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    backgroundColor: '#4A7BD0',
    height: "35%",
    width: "100%",
    alignItems: 'center'
  },
  title:{
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'normal',
    paddingTop: 30,
    marginBottom: 50
  },
  ammount:{
    color: '#fff', 
    fontSize: 42, 
    fontWeight: 'normal',
  },
  card: { 
    backgroundColor: "#fff",
    width: "85%",
    height: 100,
    alignItems: "center",
    top: -50,
    marginBottom: -20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    justifyContent: "center"
  },
  ammountTitle: {
    fontWeight: '800', 
    fontSize: 24
  },
  subtitle: {
    fontSize: 12, 
    color: "grey"
  }
});
