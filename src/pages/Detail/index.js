import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function Detail() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F6FF' }}>
      <ScrollView>
        <View style={styles.Screen}>

          <View style={styles.TopInfo}>
            <Text style={styles.TitleInfo}>Titulo</Text>
            <MaterialIcons name="star" size={30} color="yellow" />
          </View>

          <View style={styles.Details}>
            <View>
              <Text style={styles.CategoryTitle}>Categoria</Text>
              <Text style={styles.CategoryText}>Interna</Text>

              <Text style={styles.CategoryTitle}>Tipo</Text>
              <Text style={styles.CategoryText}>Pequeno</Text>

              <Text style={styles.CategoryTitle}>Planta</Text>
              <Text style={styles.CategoryText}>Cactus</Text>
            </View>
            <Image
              source={require('../../assets/cactus1.png')}
              style={styles.Image}
            />
          </View>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 35, marginHorizontal: 30, marginVertical: 5 }}>Sobre</Text>
        <Text style={{ fontSize: 16, marginHorizontal: 30, marginVertical: 10, textAlign: 'left', color: '#848484' }}>
          Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis.A ordem dos tratores não altera o pão duris.Delegadis gente
          finis, bibendum egestas augue arcu ut est.
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 60, height: 100 }}>
          <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>

            <View style={styles.backgrounSpaces}>
              <MaterialIcons name="height" color={'#FFF'} size={40} />
            </View>
            <View style={{marginLeft:5}}>
            <Text style={{color:'#848484', fontSize:12}}>Altura</Text>
            <Text>15cm</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>

            <View style={styles.backgrounSpaces}>
              <MaterialIcons name="height" size={40} style={styles.width} />
            </View>
            <View style={{marginLeft:5}}>
            <Text style={{color:'#848484', fontSize:12}}>Diametro</Text>
            <Text>15cm</Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.buy}>Preço</Text>
          <Text style={styles.price}>R$39,90</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.buyButton}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: '#181818',
    width: "100%",
    height: "55%"
  },
  TopInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  TitleInfo: {
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 30
  },
  Image: {
    width: 200,
    height: 300,
  },
  Details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20
  },
  CategoryTitle: {
    color: '#D9D9D9',
    fontSize: 12,
    marginTop: 30
  },
  CategoryText: {
    color: 'white',
    fontSize: 25
  },
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  buyButton: {
    width: 140,
    backgroundColor: '#34BE47',
    color: '#FFF',
    fontSize: 18,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buy: {
    color: '#848484',
    fontSize: 14
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22
  },
  heigthImage: {
    height: 50
  },
  width: {
    color: 'white',
    transform: [{ rotate: '90deg' },],
  },
  backgrounSpaces: {
    backgroundColor: "#181818",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})