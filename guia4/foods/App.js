import { AppRegistry } from 'react-native';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

const foods = [
  {
    id: '1',
    title: 'Pupusas',
    description: ' Calorias	221',
    src: require('./src/imgs/pupusas.jpg')
  },
  {
    id: '2',
    title: 'Tamales',
    description: ' Contiene entre 360 y 450 calorías',
    src: require('./src/imgs/tamales.jpg')
  }
];


export default function App() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Comidas típicas salvadoreñas</Card.Title>
          <Card.Divider />
          {foods.map((f, i) => {
            return (
              <View key={i} style={styles.food}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={f.src}
                />
                <Text style={styles.name}>{f.title}</Text>
                <Text style={styles.name}>{f.description}</Text>
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  food: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});