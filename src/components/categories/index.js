import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function categories(props) {
  let checked = props.checked
  return (

    <TouchableOpacity style={styles.Container} onPress={props.select}>
      <View style={checked ? styles.checked : styles.normal}>
        <Text style={checked ? styles.text : styles.textNormal}>{props.category}</Text>
      </View>
    </TouchableOpacity>


  )
}

const styles = StyleSheet.create({
  Container: {
    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1
  },
  checked: {
    height: 50,
    width: 120,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34BE47'
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  normal: {
    height: 50,
    width: 120,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  textNormal: {
    color: '#D9D9D9',
    fontWeight: 'bold',
    fontSize: 20
  }
})