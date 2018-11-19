import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, Alert, TextInput } from 'react-native';

export default class App extends React.Component
{
  operacion = '';

  constructor()
  {
    super();
    this.state = { operacion: 'Temporary text' }
    this.numeros = this.numeros.bind(this);
  }
  
  //LOGIC
  numeros(valor)
  {
    switch (valor) 
    {
      case '0':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '1':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '2':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '3':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '4':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '5':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '6':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '7':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '8':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        
        break;
      case '9':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'}); //change TextInput
    
        break;
      default: //delete
        this.operacion = '';
        this.setState({operacion:'0'});
        break;
    }
    
  } 

  operaciones(valor)
  {
    switch (valor) 
    {
      case '*':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        break;

      case '/':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        break;

      case '+':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        break;

      case '-':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        break;

      case '.':
        this.operacion = this.operacion + valor;
        this.setState({operacion: '0'});
        break;

      default: //result
        if(this.operacion != '0' && this.operacion != '')
        {
          this.operacion = eval(this.operacion);
          this.setState({operacion: '0'});
          //this.operacion = '0';
        }
        else
          Alert.alert('Ingrese un número');
        break;
    }
  }
  
  render() {
    return (
          
    <View style={styles.container}>

      <TextInput style={styles.textos} multiline={true} editable={false}> {this.operacion}</TextInput>

      <View style={styles.views}>
        <Button style={styles.botones} color="#d97a67" title="x" onPress={()=> this.operaciones('*')} />
        <Button style={styles.botones} color="#d97a67" title="/" onPress={()=> this.operaciones('/')} />
      </View>

      <View style={styles.views}>
        <Button style={styles.botones} color="#FFFFFF" title="8" onPress={()=> this.numeros('8')} />
        <Button style={styles.botones} color="#FFFFFF" title="7" onPress={()=> this.numeros('7')} />
        <Button style={styles.botones} color="#FFFFFF" title="9" onPress={()=> this.numeros('9')} />

        <Button style={styles.botones} color="#d97a67" title="-" onPress={()=> this.operaciones('-')} />
      </View>

      <View style={styles.views}>
        <Button style={styles.botones} color="#FFFFFF" title="5" onPress={()=> this.numeros('5')} />
        <Button style={styles.botones} color="#FFFFFF" title="4" onPress={()=> this.numeros('4')} />
        <Button style={styles.botones} color="#FFFFFF" title="6" onPress={()=> this.numeros('6')} />

        <Button style={styles.botones} color="#d97a67" title="+" onPress={()=> this.operaciones('+')} />
      </View>        

      <View style={styles.views}>
        <Button style={styles.botones} color="#FFFFFF" fontSize={true} title="1" onPress={()=> this.numeros('1')} />
        <Button style={styles.botones} color="#FFFFFF" fontSize={true} title="2" onPress={()=> this.numeros('2')} />
        <Button style={styles.botones} color="#FFFFFF" fontSize={true} title="3" onPress={()=> this.numeros('3')} />

        <Button style={styles.botones} color="#d97a67" title="="onPress={()=> this.operaciones('resultado')} />
      </View>

      <View style={styles.views}>
        <Button style={styles.botones} color="#FFFFFF" title="0" onPress={()=> this.numeros('0')} />

        <Button style={styles.botones} color="#d97a67" title="." onPress={()=> this.operaciones('.')} />
        <Button style={styles.botones} color="#ff8568" title="Borrar" onPress={()=> this.numeros('borrar')} />
      </View>

      <Text style={styles.nombre}>Andrea Monserrat Guzmán López</Text>
    </View>
    );
  }
}

//DESIGN
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 40, 
    paddingStart: 20,
    backgroundColor: '#21455c', 
    flexDirection: 'column', 
    alignContent: 'space-between',
    justifyContent: 'center',
  },

  botones: 
  {
    justifyContent: 'space-around',
    textAlign: 'center',
    marginStart: 100,
    fontSize: 100,
    fontStyle: 'normal', 
    backgroundColor: '#05A8AA' 
  },

  views:{
    paddingTop: 40, 
    justifyContent: 'space-between', 
    flexDirection: 'row',
    width: 270, 
    height: 70,
    borderColor: '#ff8768'
  },

  textos:{
    width: 270,
    height: 80,
    fontSize: 20,
    fontStyle: 'normal', 
    justifyContent: 'space-between',
    textAlign: 'justify',
    backgroundColor: '#e6eaef',
    alignContent: 'flex-end',
    borderWidth: 4,
    borderColor: '#ff8768'
  },

  nombre:{
    width: 270,
    height: 70,
    fontSize: 15,
    paddingTop: 35,
    fontStyle: 'normal', 
    textAlign: 'center',
    color: '#ed728d',
    //backgroundColor: '#FFFFFF'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('calculadora-react', () => App);