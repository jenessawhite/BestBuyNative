/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   ScrollView,
//   View,
//   Image,
//   TouchableHighlight
// } from 'react-native';
// import axios from 'axios';
// import { Match, MemoryRouter as Router } from 'react-router';
// import api from './Api';
// import styles from './styles';
//
// export class GetProducts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products:[]
//     };
//   }
//   componentDidMount() {
//     this.getProducts()
//   }
//   getProducts(){
//     axios.get(api() + '/products?$limit=25')
//     .then((response)=> {
//       console.log(response);
//       let products = response.data.data.slice(0);
//       console.log(products);
//       this.setState({
//         products
//       })
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//   }
//   render() {
//     return (
//       <ScrollView style={styles.mainContainer}>
//         {this.state.products.map((product) =>{
//           return (
//             <View key={product.id} style={styles.pContainer}>
//               <Text style={styles.pName}>
//                 {product.name}
//               </Text>
//               <Text style={styles.pPrice}>
//                 {product.price}
//               </Text>
//               <Text style={styles.pText}>
//                 {product.manufacturer}: {product.model}
//               </Text>
//               <Text style={styles.pText}>
//                 {product.description}
//               </Text>
//             </View>
//           )
//         })}
//       </ScrollView>
//     );
//   }
// }
//
// export class GetStores extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stores:[]
//     };
//   }
//   componentDidMount() {
//     this.getStores()
//   }
//   getStores(){
//     axios.get(api() + '/stores')
//     .then((response)=> {
//       console.log(response);
//       let stores = response.data.data.slice(0);
//       console.log(stores);
//       this.setState({
//         stores
//       })
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//   }
//   render() {
//     return (
//       <ScrollView style={styles.mainContainer}>
//         {this.state.stores.map((store) =>{
//           return (
//             <View key={store.id} style={styles.storeContainer}>
//               <Text style={styles.store}>
//                 {store.name}
//               </Text>
//               <Text style={styles.storeText}>
//                 {store.address}
//               </Text>
//               <Text style={styles.storeText}>
//                 {store.city}, {store.state} {store.zip}
//               </Text>
//             </View>
//           )
//         })}
//       </ScrollView>
//     );
//   }
// }
//
// export default class BestBuyNative extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stores:[],
//       products: []
//     };
//   }
//   render() {
//     return (
//       <Router>
//         <ScrollView>
//           <GetStores />
//           <GetProducts />
//         </ScrollView>
//       </Router>
//     );
//   }
// }
//
// AppRegistry.registerComponent('BestBuyNative', () => BestBuyNative);


import { AppRegistry } from 'react-native';
import routes from './app/routes';

AppRegistry.registerComponent('BestBuyNative', () => () => routes); //The registered name must match your original name in order for the simulator to run the program
